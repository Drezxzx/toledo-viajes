import DiscoverHero from "./components/DiscoverHero";
import Header from "./components/Header";
import MapItinerary from "./components/Map";
import MustSeen from "./components/MustSeen";
import MustSeenHotel from "./components/MustSeenHotel";
import MustSeenRestaurant from "./components/MustSeenRestaurant";

export default function Home() {
  return (
    <main className="flex w-full max-w-screen flex-col gap-1">
      <Header />
      <section className="lg:max-w-[950px] flex flex-col w-full h-full gap-5 lg:p-0 p-2 mx-auto mb-2 ">
        <DiscoverHero />
        <MapItinerary />
        <MustSeen />
        <MustSeenRestaurant />
        <MustSeenHotel />
      </section>
    </main>

  );
}
