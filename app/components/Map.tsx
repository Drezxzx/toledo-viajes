export default function MapItinerary(){
    return(
        <section className="flex justify-center items-start h-96 gap-2 flex-col">
            <h1 className="text-2xl font-bold">Itinerario de 7 días</h1>
            <iframe src="./mapa_sin_lineas.html" width="100%" height="600"></iframe>
        </section>
    )
}