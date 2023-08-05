import Link from "next/link"

import { randomCSSGradient } from "@/util/random"

interface CardProps {
    title: string,
    slug: string, 
    date: Date,
}

async function getData() : Promise<CardProps[]> {
    // const res = await fetch('https://...', { next: { revalidate: 3600 } })
    return [
        {
            title: "Title with a longe name that will hopefully wrap",
            slug: "generateSlug()",
            date: new Date()
        },
        {
            title: "lorem ipsum dolor sit amet, consectetur adipiscing elit. sed non risus. suspendisse lectus tortor",
            slug: "generateSlug",
            date: new Date()
        },
        {
            title: "Title with a longe name that will hopefully wrap",
            slug: "generateSlug",
            date: new Date()
        },        
    ]
}

const img_ = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.insider.com%2F5c59e77ceb3ce80d46564023&f=1&nofb=1&ipt=a43bab240d17de336aa5a6bb0a239100ea8669fe99faa8e86945050eb345680b&ipo=images"

function truncateText(text:string, length:number=64) : string {
    return (text.length <= length) ? text : text.substring(0, length) + " [...]";
}

function Card({title, slug, date}: CardProps) {
    const maxColorValue = 0xFFFFFF // Decimal
    const minColorValue = 0x1337 // Decimal

    return (
        <div className="relative w-full pt-6 pb-16 duration-100 transform rounded-lg shadow-xl hover:shadow-2xl md:pt-12 md:pb-64 md:max-h-96 md:w-72 hover:scale-125"
            style={{background: randomCSSGradient(minColorValue, maxColorValue)}}>
            <div className="flex flex-col pl-12 md:pl-16">
                <span className="font-thin tracking-wider">{date.toLocaleDateString("en")}</span>
                <span className="w-2/3 text-2xl font-semibold">{truncateText(title)}</span>
            </div>
            <Link href={`/posts/${slug}`} className="absolute text-4xl right-4 bottom-4 hover:border-b-4">
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
    const posts = await getData()

    return (
        <main className="bg-zinc-800">
            <header className="p-8 text-3xl text-left">
                <span className="font-thin tracking-widest">Hello</span>
            </header>
            <section className="grid w-full px-6 py-12 gap-y-12 md:gap-12 md:px-0 md:place-items-center grid-flow-cols md:grid-cols-2 lg:grid-cols-3">
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