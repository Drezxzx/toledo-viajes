import { IconEPassport } from "@tabler/icons-react";

/* eslint-disable @next/next/no-img-element */
export default function PassportHero() {

    return (
        <section className="flex flex-col gap-2 justify-center">
            <h1 className="font-bold text-xl flex gap-2 items-center">Pasaporte de Toledo <IconEPassport className="text-buttonColor"/> </h1>

            <div className="flex flex-col gap-1 items-center">
                <p>
                    Vive Toledo como nunca antes con el Pasaporte del Camino. A medida que recorres los lugares más emblemáticos de la ciudad y sus alrededores, sella cada parada y guarda un recuerdo único de tu aventura.
                </p>
                <p>
                    Además, por participar en esta experiencia, disfrutarás de más de un 35% de descuento en alojamientos, restaurantes y negocios locales. Descubre, sella y aprovecha los mejores beneficios mientras exploras todo lo que Toledo tiene para ofrecer. ¡Tu viaje será inolvidable!
                </p>
            </div>
            <div className="w-full flex gap-2">
            <img src="./passport.jpeg" alt="Imagen de pasaporte" className="size-[50%] rounded-lg" />
            <img src="./passport2.jpeg" alt="Imagen de pasaporte" className="size-[50%] rounded-lg" />
            </div>
        </section>
    )

}