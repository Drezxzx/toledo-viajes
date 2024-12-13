import PassportHero from "@/components/ui/PassportHero";
import DiscoverHero from "../components/ui/DiscoverHero";
import MapItinerary from "../components/ui/Map";
import MustSeen from "../components/ui/MustSeen";
import MustSeenHotel from "../components/ui/MustSeenHotel";
import MustSeenRestaurant from "../components/ui/MustSeenRestaurant";

export default function Home() {
  return (
    <main className="flex w-full  max-w-screen flex-col gap-1">
      <section className="lg:max-w-[950px] flex flex-col w-full h-full gap-5 lg:p-0 p-2 mx-auto mb-2 ">
        <DiscoverHero />
        <MapItinerary />
        <MustSeen />
        <MustSeenRestaurant />
        <MustSeenHotel />
        <PassportHero />
      </section>
    </main>

  );
}
