import DiscoverHero from "./components/DiscoverHero";
import Header from "./components/Header";
import MustSeen from "./components/MustSeen";

export default function Home() {
  return (
    <main className="flex w-screen h-svh flex-col gap-1">
      <Header/>
      <section className="lg:max-w-[950px] flex flex-col h-full gap-5 lg:p-0 p-2 mx-auto mb-2">
        <DiscoverHero/>
        <MustSeen/>
      </section>
    </main>
  );
}
