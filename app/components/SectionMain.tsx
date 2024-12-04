export interface Atrac{
        title: string;
        image: string;
    
}

export  function SectionMain({items, text} : {items:Atrac[], text: string }) {
    return(
        <section className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">{text}</h1>
            <div className="lg:flex justify-center items-center gap-5 grid grid-cols-2 md:grid-cols-3 ">
                {
                    items.map(({image, title}, i) =>(
                        <div className="hover:scale-105 transition-all h-36 cursor-pointer" key={i}>
                            <img src={image} alt={title} className="rounded-xl object-cover w-72 h-[7rem]"/>
                            <h3 className="font-medium text-base">{title}</h3>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}