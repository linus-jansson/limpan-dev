"use client";
import { useState, useEffect, useRef, useReducer } from 'react';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';



// const transcode = async (file: File) => {
//     const ffmpeg = ffmpegRef.current;
//     const filename = "input." + file.name.split(".").pop() || "input.unknown";
//     console.error("filename", filename)
//     await ffmpeg.writeFile(
//         filename,
//         await fetchFile(file)
//     );
//     await ffmpeg.exec(['-i', filename, "-y", "-vcodec", "libx265", "-crf", "28", 'output.mp4']);
//     const transcoded_file = await ffmpeg.readFile("output.mp4");
//     return transcoded_file
// }

// function reducer(state, action) {
//     switch (action.type) {
//         case "status":
//             break;
//         case "progress":
//             break;
//         case "running":
//             break;
//         case "error":
//             break;
// }

export default function App() {
    const [loaded, setLoaded] = useState(false);
    const [media, setMedia] = useState<Blob | null>(null);
    const [gif, setGif] = useState<string | null>(null);
    const [progress, setProgress] = useState("Ready!");
    const [error, setError] = useState<string | null>(null);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [thumbnail, setThumbnail] = useState<string | null>(null);
    const ffmpegRef = useRef(new FFmpeg());

    const load = async () => {
        const _baseURL = "https://unpkg.com/@ffmpeg/core@0.12.1/dist/umd";
        const ffmpeg = ffmpegRef.current;
        ffmpeg.on("log", ({ message }: { message: string }) => {
            // setMessage(message);
            console.info(message)
        });

        ffmpeg.on("progress", ({ progress }: { progress: number }) => {
            setProgress(`Converting ${progress * 100}%`);
        });

        await ffmpeg.load({
            coreURL: await toBlobURL(`${_baseURL}/ffmpeg-core.js`, "application/javascript"),
            wasmURL: await toBlobURL(`${_baseURL}/ffmpeg-core.wasm`, "application/wasm"),
            // workerURL: await toBlobURL(`${_baseURL}/ffmpeg-core.worker.js`, "text/javascript"),
            // /* @ts-ignore */
            // thread: true,
        });

        setLoaded(true);
    }

    const convertToGif = async () => {
        setButtonDisabled(true);
        setProgress("")
        setError(null)
        const ffmpeg = ffmpegRef.current
        if (!media) return;
        setProgress("Starting... This takes a bit depending on the video size.")
        // 
        const filename = "media." + media.name.split(".").pop() || "media.unknown";
        console.error(filename)
        const fileBlob = new Blob([media], { type: media.type });
        await ffmpeg.writeFile(filename , await fetchFile(fileBlob));
        const result = await ffmpeg.exec(["-i", filename, "-y", "-vf", "fps=12,scale=trunc(iw/2)*2:trunc(ih/2)*2:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse", "out.gif"]);
        // ,scale=300:-1:flags=lanczos
        if (result != 0) {
            setError("Error converting to Gif. Please see console for more details and create an issue on github for me to take a look.")
        }
        const data = await ffmpeg.readFile("out.gif");
        setButtonDisabled(false);
        setGif(URL.createObjectURL(
            new Blob([data], { type: "video/gif" })
        ));
    }

    const getThummbnail = async (file: File) => {
        const ffmpeg = ffmpegRef.current;
        const filename = "input." + file.name.split(".").pop() || "input.unknown";
        const fileBlob = new Blob([file], { type: file.type });
        console.error("filename", filename)
        await ffmpeg.writeFile(
            filename,
            await fetchFile(fileBlob)
        );
        await ffmpeg.exec(['-i', filename, "-y", "-vframes", "1", 'output.jpg']);
        return await ffmpeg.readFile("output.jpg");
        // return thumbnail
    }


    const handleUpload = async (e: any) => {
        setError(null)
        let file = e.target.files[0];
        console.log(file.name, file.type, file)
        const blob = new Blob([file], { type: file.type })
        console.log(blob)
        // const _thumbnail = ;
        const url = URL.createObjectURL(
            new Blob(
                [await getThummbnail(file)], 
                { type: "image/jpeg" })
        )
        setThumbnail(url)
        setMedia(file)
    }

    useEffect(() => {
        load();
        return () => ffmpegRef.current?.terminate();
    }, [])

    useEffect(() => {
        console.log("Media changes")
        console.log(thumbnail)

    }, [thumbnail])


    return loaded ? (
        <main className='grid place-items-center'>
            <h1 className='text-3xl font-semibold'>Video To Gif converter</h1>
            <span className='text-2xl'>Status: {progress}</span>
            <span>{error}</span>
            <input type="file" name="FileLoader" onChange={handleUpload} />
            {
                (thumbnail && !error) && <>
                    <div className='max-w-xs'>
                        <img src={thumbnail} alt="image" />
                    </div>
                    <button 
                        onClick={convertToGif}
                        disabled={buttonDisabled}
                        className="px-4 py-2 font-bold text-white border rounded bg-emerald-500 hover:bg-emerald-700 disabled:cursor-not-allowed disabled:hover:bg-emerald-500 border-emerald-700"
                    >Convert to GIF</button>
                </>
            }
            <div className='border-2 border-black'>
                <span className='text-2xl'>Generated:</span>
                {
                    gif && <>
                        <img src={gif} alt="" />
                    </>
                }
            </div>

        </main>
    ) :
        (
            <span>Loading in FFMPEG, this can take a minute depending on internet speed!</span>
        )

}