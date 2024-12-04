import { IconChefHat } from "@tabler/icons-react"
import { Atrac, SectionMain } from "./SectionMain"

export default function MustSeenRestaurant() {
    const restaurant : Atrac[] = [{
        title : "Restaurante La Orza",
        image: "./la_orza.jpg"
    },
    {
        title : "Restaurante La Fábrica de Harinas",
        image: "./la_fabrica.jpeg"
    },
    {
        title : "Taberna Skala",
        image: "./skala.jpg"
    },
    {
        title : "Maruxiña Lounge",
        image: "./maruxina.avif"
    },
    {
        title : "La Campana Gorda",
        image: "./la_campana.jpg"
    }
    ]

    return(
        <SectionMain items={restaurant}>
            Los restaurantes más famosos
            <IconChefHat className="text-buttonColor"/>
        </SectionMain>
    )
}