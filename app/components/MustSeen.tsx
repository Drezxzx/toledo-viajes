/* eslint-disable @next/next/no-img-element */
export default function MustSeen() {
    const atractions = [
        {
            title: "La Catedral de Toledo",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptatem.",
            image: "./test.jpg"
        },
        {
            title: "La Catedral de Toledo",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptatem.",
            image: "./test.jpg"
        },        
        {
            title: "La Catedral de Toledo",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptatem.",
            image: "./test.jpg" 
        },        
        {
            title: "La Catedral de Toledo",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptatem.",
            image: "./test.jpg" 
        },        
        {
            title: "La Catedral de Toledo",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptatem.",
            image: "./test.jpg" 
        }
    ]

    return(
        <section className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">¿Las atrascciones mas importantes?</h1>
            <div className="flex justify-center items-center gap-5 ">
                {
                    atractions.map(({image, title, description}, i) =>(
                        <div className="hover:scale-105 transition-all cursor-pointer" key={i}>
                            <img src={image} alt={title} className="rounded-xl object-cover"/>
                            <h3 className="font-medium text-base">{title}</h3>
                            <p className="text-sm text-parrafos">{description}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}