/* eslint-disable @next/next/no-img-element */
"use client";

import { IconBuildingCommunity } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function DiscoverHero() {
    const router = useRouter();
    return (
        <section className="flex flex-col gap-2 justify-center">
            <div className="font-bold text-xl items-center flex gap-2">Descubre Toledo con nosotros <IconBuildingCommunity className="text-buttonColor"/> </div>
            <div className="image rounded-2xl max-w-full flex items-start flex-col justify-center">
                <div className="w-[80%] md:mt-48 flex flex-col gap-2 pl-8">
                    <h1 className="text-4xl font-bold text-white">
                        Camino de Toledo
                    </h1>
                    <p className="text-sm text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non et deleniti corrupti. Sapiente cum dolorem quia pariatur possimus temporibus porro eveniet ipsa reprehenderit, maxime, et fugit omnis unde, mollitia nostrum.

                    </p>
                <div className="flex flex-row gap-2 mt-10">
                    <button onClick={() => router.push("#importante")} className="bg-buttonColor transition-all hover:saturate-200 hover:scale-105 px-2 py-1 text-white font-semibold rounded-full">Ver online</button>
                </div>
                </div>
            </div>
        </section>
    )

}