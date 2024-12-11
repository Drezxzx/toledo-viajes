import { IconBuildingBurjAlArab } from "@tabler/icons-react"
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
        title : "Hospedería el molino en los yébenes",
        image: "https://images.trvl-media.com/lodging/50000000/49030000/49028700/49028628/092520d3.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
    }
    ]

    return(
        <SectionMain items={restaurant}>
            Hospedajes 
            <IconBuildingBurjAlArab className="text-buttonColor"/>
        </SectionMain>
    )
}