import { IconEPassport } from "@tabler/icons-react";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function PassportHero() {

    return (
        <section className="flex flex-col gap-2 justify-center">
            <h1 className="font-bold text-xl flex gap-2 items-center">Pasaporte de Toledo <IconEPassport className="text-buttonColor" /> </h1>

            <div className=" flex gap-1 items-center flex-col md:flex-row">
                <img src="./passport.jpeg" alt="Imagen de pasaporte" className="size-[70%] md:w-[30%]  rounded-lg" />
                <div className="flex flex-col gap-2 md:pl-5 ">
                    <p className="text-justify">
                        Vive Toledo como nunca antes con el Pasaporte del Camino. A medida que recorres los lugares más emblemáticos de la ciudad y sus alrededores, sella cada parada y guarda un recuerdo único de tu aventura.
                    </p>
                    <p className="text-justify">
                        Además, por participar en esta experiencia, disfrutarás de más de un 35% de descuento en alojamientos, restaurantes y negocios locales. Descubre, sella y aprovecha los mejores beneficios mientras exploras todo lo que Toledo tiene para ofrecer. ¡Tu viaje será inolvidable!
                    </p>

                    <Link href={"https://www.google.com/maps/place/Ayuntamiento+de+Toledo/@39.856597,-4.0275589,17z/data=!3m1!4b1!4m6!3m5!1s0xd6a09f3ffffffff:0xa3185c4a4792688c!8m2!3d39.856597!4d-4.024984!16s%2Fg%2F121m841h?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"} target="_blank" className="hover:underline text-blue-600 font-bold text-lg" >
                    📍Ubicación para recoger el pasaporte
                    </Link>
                </div>
            </div>
        </section>
    )

}