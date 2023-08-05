import Link from "next/link"

import { randomCSSGradient } from "@/util/random"

interface CardProps {
    title: string,
    summary: string, 
    slug: string, 
    image: string,
    date: Date,
}

function generateSlug () : string {
    // random string generator
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 12) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

const img_ = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.insider.com%2F5c59e77ceb3ce80d46564023&f=1&nofb=1&ipt=a43bab240d17de336aa5a6bb0a239100ea8669fe99faa8e86945050eb345680b&ipo=images"

function Card({title, summary, slug, image, date}: CardProps) {
    let maxColorValue = 0x999999 // Decimal
    let minColorValue = 0x1337 // Decimal

    return (
        <div className="relative w-full pt-6 pb-32 duration-100 rounded-lg shadow-2xl md:pt-12 md:pb-64 md:max-h-96 md:hover:transform md:w-72 md:hover:scale-125"
            style={{background: randomCSSGradient(minColorValue, maxColorValue )}}>
            <div className="flex flex-col pl-12">
                <span className="font-thin tracking-wider">{date.toLocaleDateString()}</span>
                <span className="w-2/3 text-2xl font-semibold">
                    {title}
                </span>

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

export default function Posts() {

    return (
        <main className="grid w-full gap-6 py-12 place-items-center md:grid-cols-2 bg-stone-700 lg:grid-cols-3">
            <Card 
                title="Title with a longe name that will hopefully wrap"
                summary="Summary"
                slug={generateSlug()}
                image="Image"
                date={new Date()}
            />
            <Card 
                title="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum?"
                summary="Summary"
                slug={generateSlug()}
                image="Image"
                date={new Date()}
            />
            <Card 
                title="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum?"
                summary="Summary"
                slug={generateSlug()}
                image="Image"
                date={new Date()}
            />            
        </main>
    )
}