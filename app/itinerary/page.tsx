import { auth } from "@/auth";
import { getItineraryByUser } from "../actions/actions";
import ItineraryHero from "../components/ItineraryHero";

export  default async function Page() {
  const user = await auth();

  const data = await getItineraryByUser(user?.user?.email as string)
  const sanitizedData = data.map((item) => ({
    id: item.id,
    day: item.day,
    place: item.place,
    hotel: item.hotel,
    hotelImage: item.hotelImage,
    imagePlace: item.imagePlace,
    timePlace: item.timePlace,
    visited: item.visited,
  }));
  
    return (
        <main className="flex w-full max-w-screen flex-col gap-1">
        <section className="lg:max-w-[950px] flex flex-col w-full h-full gap-5 lg:p-0 p-2 mx-auto mb-2 ">
          <h1 className="text-4xl font-bold">Itinerario de toledo de 7 días</h1>
          <p className="text-parrafos">Toledo te espera con rincones llenos de historia y secretos por descubrir,  enamórate de la magia que pocos conocen.</p>
          <h1 className="text-4xl font-bold">Ruta</h1>
          <ItineraryHero itinerary={sanitizedData} email={user?.user?.email as string} />
        </section>
      </main>
  
    )
}