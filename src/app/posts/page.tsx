import Link from "next/link"

import { randomCSSGradient } from "@/util/random"

interface CardProps {
    title: string,
    slug: string, 
    date: Date,
}

export const dynamic = 'force-dynamic';
async function getPosts() : Promise<CardProps[]> {
    const res = await fetch('/api/posts', { next: { revalidate: 360 } })
    const posts = await res.json()
    const Returnposts = posts.map ((post: any) => {
        return {
            title: post.title,
            slug: post.slug,
            date: new Date(post.date),
        }
    })
    return Returnposts
}

function truncateText(text:string, length:number=64) {
    return (text.length <= length) ? text : <>{text.substring(0, length)} <span className="tracking-widest text-white/75">[...]</span></>;
}

function Card({title, slug, date}: CardProps) {
    const maxColorValue = 0x999999 // Gray Hex
    const minColorValue = 0x000000 // Black Hex

    return (
        <div className="relative w-full pt-6 pb-16 duration-100 transform rounded-lg shadow-xl hover:shadow-2xl md:pt-12 md:pb-64 md:max-h-96 md:w-72 md:hover:scale-110"
            style={{background: randomCSSGradient(minColorValue, maxColorValue)}}>
            <div className="flex flex-col pl-12 md:pl-16 text-zinc-100">
                <span className="tracking-wider text-zinc-100/75">{date.toLocaleDateString("en")}</span>
                <Link href={`/posts/${slug}`} className="w-2/3 text-2xl font-semibold hover:underline" aria-label={title}>
                    <span >{truncateText(title)}</span>
                </Link>
            </div>
            <Link href={`/posts/${slug}`} className="absolute text-4xl right-4 bottom-4 md:hover:animate-bounce-x" aria-label="Link to post">
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5 12l14 0" />
                    <path d="M13 18l6 -6" />
                    <path d="M13 6l6 6" />
                </svg>
            </Link>
        </div>
    )
}
export default async function Posts() {
    const posts = await getPosts()

    return (
        <main className="bg-zinc-800">
            <header className="p-8 text-3xl text-left">
                <span className="font-thin tracking-widest">Hello</span>
            </header>
            <section className="grid w-full px-6 py-12 mx-auto md:container gap-y-12 md:gap-12 md:px-0 md:place-items-center grid-flow-cols md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, index) => {
                    return <Card key={index} title={post.title} slug={post.slug} date={post.date} />
                })}
            </section>
            <footer>
                footer
            </footer>
        </main>
    )
}