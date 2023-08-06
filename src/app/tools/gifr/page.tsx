"use client";
import { useState, useEffect, useRef } from 'react';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';

export default function App() {
    const [loaded, setLoaded] = useState(false);
    const [media, setMedia] = useState<string | null>(null);
    const [gif, setGif] = useState<string | null>(null);
    const [progress, setProgress] = useState("Ready!");
    const ffmpegRef = useRef(new FFmpeg());

    const load = async () => {
        const _baseURL = "https://unpkg.com/@ffmpeg/core@0.12.1/dist/umd";
        const ffmpeg = ffmpegRef.current;
        ffmpeg.on("log", ({ message }: { message: string }) => {
            // setMessage(message);
            console.info(message)
        });

        ffmpeg.on("progress", ({ progress }: { progress: number }) => {
            setProgress(`${Math.floor(progress * 100)}%`);
        });

        await ffmpeg.load({
            coreURL: await toBlobURL(`${_baseURL}/ffmpeg-core.js`, "application/javascript"),
            wasmURL: await toBlobURL(`${_baseURL}/ffmpeg-core.wasm`, "application/wasm"),
        });

        setLoaded(true);
    }

    const convertToGif = async () => {
        setProgress("")
        console.log("toGif")
        const ffmpeg = ffmpegRef.current
        if (!media) return;
        console.log("exists")

        await ffmpeg.writeFile("media.mp4", await fetchFile(media));
        await ffmpeg.exec(["-i", "media.mp4", "-vf", "split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse", "out.gif"]);
        const data = await ffmpeg.readFile("out.gif");
        setGif(URL.createObjectURL(
            new Blob([data.buffer], { type: "video/gif" })
        ));
    }

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        setMedia(URL.createObjectURL(
            new Blob([file], { type: file.type })
        ));
    }

    useEffect(() => {
        load();
    }, [])


    return loaded ? (
        <main>
            <h1>MP4 To Gif converter</h1>
            <span>{progress}</span>
            <input type="file" name="" onChange={handleUpload} id="" />
            {
                media && <>
                    <video src={media} controls autoPlay loop muted></video>
                    <button onClick={convertToGif}>Convert to GIF</button>
                </>
            }
            {
                gif && <>
                    <img src={gif} alt="" />
                </>
            }

        </main>
    ) :
    (
        <span>Loading in FFMPEG, this can take a minute depending on internet speed!</span>
    )

}