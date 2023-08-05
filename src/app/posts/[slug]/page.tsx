import { randomCSSGradient } from "@/util/random"

interface Post {
    title: string,
    content: string,
    date: Date,
    image?: string,
    showBanner?: boolean,
}

async function getData() : Promise<Post> {
    // const res = await fetch('https://.../data')

    return {
        title: "Hello This is a very interesting title and stuff",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at. Amet facilisis magna etiam tempor. Consequat id porta nibh venenatis. Id interdum velit laoreet id donec. Purus non enim praesent elementum. Scelerisque fermentum dui faucibus in ornare. Ullamcorper eget nulla facilisi etiam. At volutpat diam ut venenatis tellus in metus vulputate eu. Arcu bibendum at varius vel. Est pellentesque elit ullamcorper dignissim cras tincidunt. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus.

        Quis hendrerit dolor magna eget est. Donec enim diam vulputate ut. In nulla posuere sollicitudin aliquam ultrices sagittis orci. Bibendum neque egestas congue quisque egestas diam in arcu. Purus sit amet luctus venenatis lectus. Mollis nunc sed id semper risus in hendrerit. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Sollicitudin nibh sit amet commodo nulla facilisi nullam. Enim praesent elementum facilisis leo vel fringilla est. In dictum non consectetur a. Nulla porttitor massa id neque aliquam. Viverra aliquet eget sit amet tellus cras adipiscing. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Sed turpis tincidunt id aliquet risus feugiat in ante metus. At urna condimentum mattis pellentesque id nibh tortor id. Montes nascetur ridiculus mus mauris vitae. Sit amet purus gravida quis blandit turpis cursus in. Ullamcorper malesuada proin libero nunc consequat interdum varius. Varius morbi enim nunc faucibus a pellentesque. Quis lectus nulla at volutpat diam.
        
        Ipsum dolor sit amet consectetur adipiscing elit duis tristique. At quis risus sed vulputate odio ut enim blandit volutpat. Pretium nibh ipsum consequat nisl. Purus sit amet luctus venenatis lectus. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Sit amet commodo nulla facilisi nullam vehicula ipsum. Ut enim blandit volutpat maecenas volutpat. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Mauris a diam maecenas sed enim. Massa placerat duis ultricies lacus sed. Commodo viverra maecenas accumsan lacus. Ac turpis egestas maecenas pharetra convallis posuere morbi.
        
        Diam ut venenatis tellus in metus vulputate eu scelerisque. Dictum non consectetur a erat. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. In tellus integer feugiat scelerisque varius morbi enim. Aliquam ut porttitor leo a diam sollicitudin tempor. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Risus commodo viverra maecenas accumsan. Dictum non consectetur a erat nam at. Pulvinar etiam non quam lacus suspendisse. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Aliquam ut porttitor leo a diam sollicitudin tempor id. Iaculis urna id volutpat lacus laoreet non curabitur gravida.
        
        Etiam tempor orci eu lobortis elementum nibh tellus molestie. Nec nam aliquam sem et. Viverra vitae congue eu consequat. Nibh nisl condimentum id venenatis a condimentum vitae. Id porta nibh venenatis cras sed felis eget velit aliquet. Quam nulla porttitor massa id neque. Et egestas quis ipsum suspendisse ultrices gravida dictum. Porttitor rhoncus dolor purus non enim. Morbi tristique senectus et netus et malesuada fames ac turpis. Parturient montes nascetur ridiculus mus mauris. Malesuada fames ac turpis egestas. Fringilla ut morbi tincidunt augue interdum velit. Justo nec ultrices dui sapien eget. Ullamcorper velit sed ullamcorper morbi. Felis imperdiet proin fermentum leo vel.
        
        Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ultrices vitae auctor eu augue ut. Sodales ut eu sem integer vitae justo eget magna fermentum. Consectetur a erat nam at lectus. Malesuada nunc vel risus commodo viverra maecenas. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Pretium fusce id velit ut tortor pretium viverra. Elementum nisi quis eleifend quam. Pulvinar etiam non quam lacus suspendisse faucibus interdum. Facilisi cras fermentum odio eu feugiat pretium. Lectus arcu bibendum at varius. Nunc scelerisque viverra mauris in aliquam sem. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. A iaculis at erat pellentesque adipiscing commodo. Ornare suspendisse sed nisi lacus sed viverra. Non odio euismod lacinia at quis risus sed vulputate odio. Proin nibh nisl condimentum id venenatis a condimentum vitae. In hendrerit gravida rutrum quisque non tellus orci ac auctor.
        
        Venenatis a condimentum vitae sapien pellentesque. A condimentum vitae sapien pellentesque habitant morbi tristique. Hac habitasse platea dictumst quisque. Fringilla ut morbi tincidunt augue. Donec adipiscing tristique risus nec feugiat in. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Aenean et tortor at risus viverra adipiscing. Aliquet lectus proin nibh nisl condimentum id venenatis. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Non diam phasellus vestibulum lorem sed. Pulvinar etiam non quam lacus suspendisse. Dui accumsan sit amet nulla facilisi. Malesuada fames ac turpis egestas integer eget. Sit amet est placerat in. Volutpat maecenas volutpat blandit aliquam. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Diam sit amet nisl suscipit adipiscing bibendum.
        
        Neque egestas congue quisque egestas diam in arcu cursus. Quis risus sed vulputate odio ut enim. In fermentum posuere urna nec. Semper auctor neque vitae tempus. Venenatis urna cursus eget nunc. Consequat id porta nibh venenatis. Mauris vitae ultricies leo integer malesuada. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Quam pellentesque nec nam aliquam sem et tortor consequat id. Pharetra diam sit amet nisl suscipit adipiscing. Scelerisque varius morbi enim nunc faucibus a. Et malesuada fames ac turpis egestas integer eget aliquet. Orci nulla pellentesque dignissim enim. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Adipiscing diam donec adipiscing tristique.
        
        Orci sagittis eu volutpat odio facilisis mauris sit amet. Non consectetur a erat nam at lectus urna duis. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Pellentesque sit amet porttitor eget dolor morbi non. Risus sed vulputate odio ut enim blandit volutpat. Nibh praesent tristique magna sit amet. Non pulvinar neque laoreet suspendisse interdum consectetur. Ac auctor augue mauris augue neque gravida. At varius vel pharetra vel turpis. Urna et pharetra pharetra massa massa ultricies mi.
        
        Tincidunt ornare massa eget egestas. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Vel facilisis volutpat est velit egestas dui id. Eget sit amet tellus cras adipiscing enim eu turpis. Pulvinar pellentesque habitant morbi tristique senectus et netus. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Purus sit amet luctus venenatis. In vitae turpis massa sed elementum tempus. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Pellentesque habitant morbi tristique senectus et netus. Magna fringilla urna porttitor rhoncus dolor purus. Vulputate enim nulla aliquet porttitor. Sit amet porttitor eget dolor morbi non. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Urna molestie at elementum eu facilisis sed odio morbi. Est sit amet facilisis magna etiam. Neque laoreet suspendisse interdum consectetur libero id faucibus. Dui faucibus in ornare quam viverra orci sagittis eu.`,
        // image: "https://via.placeholder.com/150/92c952",
        // showBanner: true,
        date: new Date(),
    }
}

// function Banner({image, showBanner} : Post) {

//     if (image) {
//         return (
//             <div className="justify-center w-full h-32">
//                 <img src={image}/>
//             </div>
//         ) 
//     } 
//     if (!showBanner)
//         return (
//             <div className="py-32"></div>
//         )

//     return (
//         <div className="h-32 mb-12 bg-zinc-800 rounded-b-xl" style={{background: randomCSSGradient(0x000000, 0x888888)}}></div>
//     )
// }

export default async function Page({ params }: { params: { slug: string } }) {
    const data = await getData()
    
    return (
        <main className="flex flex-col items-center">
            <article className="container">
                <div className="pt-40">
                    <h1 className="text-3xl font-semibold text-start">{data.title}</h1>
                    <pre className="font-thin tracking-widest whitespace-pre-line text-white/75">{data.date.toLocaleDateString()}</pre>
                </div>
                <div className="pt-12 text-justify lg:px-40">
                    {data.content}
                </div>
            </article>
        </main>
    )
}