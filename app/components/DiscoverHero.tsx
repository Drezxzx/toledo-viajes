/* eslint-disable @next/next/no-img-element */
export default function DiscoverHero() {
    return (
        <section className="flex flex-col gap-2 justify-center">
            <div className="font-bold text-xl">Descubre Toledo con nosotros</div>
            <div className="image rounded-2xl flex items-start flex-col justify-center">
                <div className="w-[80%] md:mt-48 flex flex-col gap-2 pl-8">
                    <h1 className="text-4xl font-bold text-white">
                        Camino de Toledo
                    </h1>
                    <p className="text-sm text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non et deleniti corrupti. Sapiente cum dolorem quia pariatur possimus temporibus porro eveniet ipsa reprehenderit, maxime, et fugit omnis unde, mollitia nostrum.

                    </p>
                <div className="flex flex-row gap-2 mt-10">
                    <button className="bg-buttonColor transition-all hover:saturate-200 hover:scale-105 px-2 py-1 text-white font-semibold rounded-full">Ver online</button>
                </div>
                </div>
            </div>
        </section>
    )

}