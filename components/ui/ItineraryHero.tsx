/* eslint-disable @next/next/no-img-element */
"use client";
import { Itinerary } from "@/types/types";
import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import VisitedClass from "../../app/lib/visitedClass";
import { Progress } from "@/components/ui/progress"
import { IconCircleCheckFilled } from "@tabler/icons-react";

export default function ItineraryHero({ itinerary, email }: { itinerary: Itinerary[], email: string }) {
    const [selectedDay, setSelectedDay] = useState(1);
    const [progress, setProgress] = useState(0);
    const [numberVisited, setNumberVisited] = useState(0)
    const [places, setPlaces] = useState<Itinerary[]>([]);
    const days = ["1", "2", "3", "4", "5", "6", "7"];
    const totalPlaces = itinerary.length;

    useEffect(() => {
        if (places.length === 0) return;

        const visited = itinerary.filter((place) => place.visited === 1);
        setNumberVisited(visited.length);
        const normalizedProgress = (visited.length / 33) * 100;
        setProgress(normalizedProgress);

    }, [places]);

    useEffect(() => {
        if (progress === 100) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
            });
        }
    }, [progress]);

    const checkIfAllVisited = (day: number) => {
        const selectedPlaces = itinerary.filter(place => place.day === day);
        const visited = selectedPlaces.filter(place => place.visited === 1);
        return visited.length === selectedPlaces.length;
    }

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
        <section className="w-full p-1 flex flex-col gap-2">
            <ul className="md:flex w-full justify-start gap-5 grid grid-cols-4 ">
                {
                    days.map(day => <li key={day} className={`${Number(day) === selectedDay ? "bg-slate-400/80" : ""} flex gap-2 py-2 rounded-xl px-5 cursor-pointer text-sm relative font-semibold bg-bggray items-center hover:bg-slate-400/80 transition-all duration-300`} onClick={() => setSelectedDay(Number(day))}>
                        {checkIfAllVisited(Number(day)) && <IconCircleCheckFilled className='text-emerald-400 absolute top-[-7px] right-[-9px]' size={23} />}
                        Día {day}
                    </li>)
                }
            </ul>

            {places.length > 0 && <div>
                <h1>Progresso: {numberVisited}/{totalPlaces}</h1>
                <Progress value={progress} className=" w-full" />
            </div>}

            <article className="flex flex-col gap-2 w-full mt-4">
                {
                    places.map(place => (
                        <div className="flex w-full justify-between items-center" key={place.id}>
                            <div className="flex gap-2 items-center w-[65%]">
                                <img src={place.imagePlace} alt={place.place} className="md:w-[11rem] md:h-[5rem] w-20 h-16 rounded-md object-cover" />
                                <div className="flex flex-col gap-1">
                                    <h3 className="md:text-xl text-base font-medium">{place.place.replace(".", "")}</h3>
                                    <span className="text-sm text-parrafos">{place.timePlace}</span>
                                </div>
                            </div>
                            <button
                                onClick={handleClick}
                                data-idplace={place.id}
                                className={`${Boolean(place.visited) ? "bg-emerald-400" : "bg-bggray hover:bg-emerald-100"} w-[7rem] h-[5rem] md:w-[11rem] md:h-[3rem] flex items-center justify-center px-5 rounded-xl font-bold hover:scale-102 transition-all`}>
                                {Boolean(place.visited) ? "Visitado" : "Marcar como visitado"}
                            </button>

                        </div>
                    ))
                }
            </article>
            {places.length > 0 &&
                <div className=" w-full flex flex-col gap-1  border-t border-borderColor mt-2 ">
                    <h1 className="text-xl font-bold">Alojamiento recomendado</h1>
                    <div className="flex gap-2 items-center flex-col md:flex-row">
                        <img src={places[0].hotelImage} alt={places[0].hotel} className="md:w-[11rem] md:h-[5rem] rounded-md object-cover" />
                        <h3 className="text-xl font-medium">{places[0].hotel.replace(".", "")}</h3>
                    </div>

                </div>}
        </section>
    )

}