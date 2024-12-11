import { IconChefHat } from "@tabler/icons-react"
import { Atrac, SectionMain } from "./SectionMain"

export default function MustSeenRestaurant() {
    const restaurant : Atrac[] = [{
        title : "Adolfo Restaurante",
        image: "https://www.restaurantesdebuenamesa.com/uploads/galerias/Adolfo002.jpg"
    },
    {
        title : "Restaurante Casa Parrilla",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/c4/cd/2e/photo0jpg.jpg?w=1200&h=900&s=1"
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
            Restaurantes 
            <IconChefHat className="text-buttonColor"/>
        </SectionMain>
    )
}