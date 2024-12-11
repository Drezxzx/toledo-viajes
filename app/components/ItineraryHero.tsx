/* eslint-disable @next/next/no-img-element */
"use client";

import { Itinerary } from "@/types/types";
import { useEffect, useState } from "react";
import VisitedClass from "../lib/visitedClass";

export default function ItineraryHero({ itinerary, email }: { itinerary: Itinerary[], email: string }) {
    const [selectedDay, setSelectedDay] = useState(1);
    const [places, setPlaces] = useState<Itinerary[]>([]);
    const days = ["1", "2", "3", "4", "5", "6", "7"];

    useEffect(() => {
        const selectedPlaces = itinerary.filter(place => place.day === selectedDay);
        setPlaces(selectedPlaces);
    }, [selectedDay])

    const setVisited = async (idPlace: number) => {
        const data = await VisitedClass.setVisited({ idPlace, email });
        console.log(data);
    }

    const setNotVisited = async (idPlace: number) => {
        const data = await VisitedClass.setNotVisited({ idPlace, email });
        console.log(data);
    }

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const idPlace = Number(e.currentTarget.dataset.idplace);
        const element = places.find(place => place.id === idPlace);
        if (!element) return;

        if (element.visited === 1) {
            element.visited = 0;
            setPlaces([...places]);
            await setNotVisited(idPlace);
        } else {
            element.visited = 1;
            setPlaces([...places]);
            await setVisited(idPlace);
        }


    }

    return (
        <section className="w-full ">
            <ul className="flex w-full justify-start gap-5 ">
                {
                    days.map(day => <li key={day} className={`${Number(day) === selectedDay ? "bg-slate-400/80" : ""} flex gap-2 py-2 rounded-xl px-5 cursor-pointer  bg-bggray items-center hover:bg-slate-400/80 transition-all duration-300`} onClick={() => setSelectedDay(Number(day))}>
                        Día {day}
                    </li>)
                }
            </ul>

           

            <article className="flex flex-col gap-2 w-full mt-4">
                {
                    places.map(place => (
                        <div className="flex w-full justify-between items-center" key={place.id}>
                            <div className="flex gap-2 items-center">
                                <img src={place.imagePlace} alt={place.place} className="md:w-[11rem] md:h-[5rem] rounded-md object-cover" />
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-xl font-medium">{place.place.replace(".", "")}</h3>
                                    <span className="text-sm text-parrafos">{place.timePlace}</span>
                                </div>
                            </div>
                            <button onClick={handleClick} data-idPlace={place.id} className={`${Boolean(place.visited) ? "bg-emerald-400 hover:bg-bggray" : " bg-bggray hover:bg-emerald-100"} px-5 py-1 rounded-xl font-bold h-[3rem]  md:w-[204.5px] hover:scale-105 transition-all `}>{Boolean(place.visited) ? "Visitado" : "Marcar como visitado"} </button>
                        </div>
                    ))
                }
            </article>
            {places.length > 0 &&
            <div className=" w-full flex flex-col gap-1  border-t border-borderColor mt-2 ">
                <h1 className="text-xl font-bold">Alojamiento recomendado</h1>
                <div className="flex gap-2 items-center">
                <img src={places[0].hotelImage} alt={places[0].hotel} className="md:w-[11rem] md:h-[5rem] rounded-md object-cover" />
                <h3 className="text-xl font-medium">{places[0].hotel.replace(".", "")}</h3>
                </div>

            </div>}
        </section>
    )

}