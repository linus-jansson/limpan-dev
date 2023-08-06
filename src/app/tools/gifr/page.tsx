"use client";
import { useState, useEffect, useRef } from 'react';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';

export default function App() {
    const [loaded, setLoaded] = useState(false);
    const [media, setMedia] = useState<string | null>(null);
    const [gif, setGif] = useState<string | null>(null);
    const [message, setMessage] = useState("");
    const ffmpegRef = useRef(new FFmpeg());

    const load = async () => {
        const _baseURL = "https://unpkg.com/@ffmpeg/core@0.12.1/dist/esm";
        const ffmpeg = ffmpegRef.current;
        ffmpeg.on("log", ({ message }: { message: string }) => {
            // setMessage(message);
            console.info(message)
        });

        ffmpeg.on("progress", ({ message }: { message: string }) => {
            setMessage(`${parseInt(message) << 0 * 100}%`);
        });

        await ffmpeg.load({
            coreURL: await toBlobURL(`${_baseURL}/ffmpeg-core.js`, "application/javascript"),
            wasmURL: await toBlobURL(`${_baseURL}/ffmpeg-core.wasm`, "application/wasm"),
        });

        setLoaded(true);
    }

    const toGif = async () => {
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
            <h1>FFmpeg loaded</h1>
            <span>{message}</span>
            <input type="file" name="" onChange={handleUpload} id="" />
            {
                media && <>
                    <video src={media} controls></video>
                    <button onClick={toGif}>Convert to GIF</button>
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
        <span>Loading...</span>
    )

}