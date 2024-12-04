/* eslint-disable @next/next/no-img-element */
export default function MustSeen() {
    const atractions = [
        {
            title: "La Catedral de Toledo",
            description: "La catedral de Santa María, llamada también catedral primada de España, es un templo católico de arquitectura gótica en Toledo, considerado por algunos como el opus magnum1​ de este estilo en España. Su construcción comenzó en 1226 bajo el reinado de Fernando III el Santo y las últimas aportaciones góticas se dieron en siglo XV cuando en 1493 se cerraron las bóvedas de los pies de la nave central, en tiempos de los Reyes Católicos.",
            image: "./test.jpg"
        },
        {
            title: "Alcázar de Toledo",
            description: "Encaramado en la cima de la colina en la ciudad de Toledo, España, el Alcázar de Toledo es un palacio fortificado con paredes de granito. El edificio se distingue por cuatro torres cuadrangulares, concentradas en torno a una amplia explanada, un palacio visigodo y una fortaleza. Las fachadas tienen un estilo arquitectónico renacentista.",
            image: "./alcazar.webp"
        },        
        {
            title: "la Judería",
            description: "El barrio de la judería fue uno de los más importantes y destacados de Castilla. De hecho, historiadores como Julio Porres sostienen que llegó a haber dos juderías: la Judería Mayor (lo que hoy se entiende como el barrio de la judería y que se visita) y la Judería Menor que estuvo ubicada muy próxima a la Catedral de Toledo.",
            image: "./ronda.jpeg" 
        },        
        {
            title: "San Juan de los Reyes",
            description: "El convento de San Juan de los Reyes es un cenobio de la ciudad española de Toledo perteneciente a la Orden Franciscana, que fue construido bajo el patrocinio de la reina Isabel I de Castilla con la intención de convertirlo en mausoleo real, en conmemoración de la batalla de Toro y del nacimiento del príncipe Juan. Se trata de una de las más valiosas muestras del estilo gótico isabelino y el edificio más importante erigido por los Reyes Católicos.",
            image: "./san-juan.png" 
        },        
        {
            title: "Museo de El Greco",
            description: 'En su interior se encuentra parte de la obra de El Greco, de la que destacan un magnífico "apostolado", la "Vista y plano de Toledo" y "Las lágrimas de San Pedro". El museo se completa con cuadros de Luis Tristán, Murillo, Valdés Leal y otros artistas',
            image: "./museogreco.jpg" 
        }
    ]

    return(
        <section className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">¿Las atrascciones mas importantes?</h1>
            <div className="flex justify-center items-center gap-5 ">
                {
                    atractions.map(({image, title, description}, i) =>(
                        <div className="hover:scale-105 transition-all cursor-pointer" key={i}>
                            <img src={image} alt={title} className="rounded-xl object-cover w-72 h-[7rem]"/>
                            <h3 className="font-medium text-base">{title}</h3>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}