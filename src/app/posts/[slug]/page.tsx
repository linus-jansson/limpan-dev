async function getData() {
    // const res = await fetch('https://.../data')
    
    return {}
}

export default async function Page({ params }: { params: { slug: string } }) {
    const data = await getData()
    
    return <div>My Post: {params.slug}</div>
}