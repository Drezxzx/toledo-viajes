/* eslint-disable @next/next/no-img-element */
"use client";
import { IconLogout, IconTower } from "@tabler/icons-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const { data: session } = useSession();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log(session)
        if(session?.user === undefined){
            setIsLoading(false)
            return
        };
       if(!session?.user)return;
       setIsLoading(false);
    }, [session]);

    const Button = () => {
        if (isLoading) return
        
        if (session?.user) {
            return (
                <div className="flex justify-center items-center gap-2">
                    <span className="px-4 py-2 rounded-3xl  bg-bggray text-black font-semibold ">
                        {session.user.name?.split(" ")[0]}
                    </span>
                    <span><IconLogout className="text-buttonColor cursor-pointer hover:scale-105" onClick={() => signOut()}/></span>
                </div>

            )
        } else {
            return (
                <button className="px-4 py-2 rounded-3xl bg-buttonColor" onClick={() => signIn("google")}>Iniciar sesión</button>
            )
        }
    }

    

    return (
        <header className="w-screen flex mb-5 h-16 md:justify-between justify-center gap-8 md:gap-0 items-center px-4 py-1 border-b border-borderColor">
            <div className="flex justify-center items-center gap-2">
                <span><IconTower className="text-buttonColor"/></span>
                <h1  className="text-xl hidden md:block  font-bold">Toledo viajes</h1>
            </div>

            <div className="flex justify-center items-center gap-5">
                {session?.user && <Link className="hover:underline" href={"/itinerary"}>Mi itinerario</Link>}
                <Link className="hover:underline" href={"/"}>Inicio</Link>
                <Button />
            </div>
        </header>
    )
}