import { Atrac, SectionMain } from "./SectionMain"

export default function MustSeenHotel() {
    const restaurant : Atrac[] = [{
        title : "Hotel San Juan de los Reyes",
        image: "./Hotel-San-Juan-de-los-Reyes.jpg"
    },
    {
        title : "Hotel Boutique Adolfo",
        image: "./Hotel–Boutique-Adolfo.jpg"
    },
    {
        title : "Parador de Toledo",
        image: "./taberna.jpg"
    },
    {
        title : "Hotel Pintor El Greco",
        image: "./Hotel–Pintor–El-Greco.jpg"
    },
    {
        title : "Eurostars Palacio Buenavista",
        image: "./Eurostars–Palacio-Buenavista.jpg"
    }
    ]

    return(
        <SectionMain items={restaurant} text="¿Los hoteles más famosos?"/>
    )
}