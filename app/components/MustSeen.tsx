import { IconBuildings } from "@tabler/icons-react"
import { SectionMain } from "./SectionMain"

/* eslint-disable @next/next/no-img-element */
export default function MustSeen() {
    const atractions = [
        {
            title: "La Catedral de Toledo",
            image: "./test.jpg"
        },
        {
            title: "Alcázar de Toledo",
            image: "./alcazar.webp"
        },
        {
            title: "la Judería",
            image: "./ronda.jpeg"
        },
        {
            title: "San Juan de los Reyes",
            image: "./san-juan.png"
        },
        {
            title: "Museo de El Greco",
            image: "./museogreco.jpg"
        }
    ]

    return (
        <SectionMain items={atractions}>
             Los sitios más importantes 
            <IconBuildings className="text-buttonColor" />
        </SectionMain>
    )
}