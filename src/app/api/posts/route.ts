interface Post {
    title: string;
    slug: string;
    date: string;
}

export async function GET(request: Request) {
    const APIResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await APIResponse.json();
    return new Response(JSON.stringify([
        {
            title: 'Hello world!',
            slug: 'hello-world',
            date: new Date("2020-01-01")
        },
        {
            title: 'Hello world with long title!',
            slug: 'hello-world-2',
            date: new Date("2020-01-02")
        },
        {
            title: 'Hello world With even longer title because I can! and some more text to make it even longer!',
            slug: 'hello-world-3',
            date: new Date("2020-01-03")
        },

    ]));
}