import client from "@/app/conn/conn";
import { NextResponse } from "next/server";

export async function PUT(req: Request){
    const { email, idPlace } = await req.json();

    try {
        const data = await client.execute({
            sql : `UPDATE "visitedPlaces" set visited = 1
                WHERE "idPlace" = ? AND "idUser" = (SELECT id FROM users WHERE email = ?);`,
            args : [idPlace, email]
        })

        return NextResponse.json({success : data.rowsAffected > 0}, {status: 200});
        
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: error }), { status: 500 });
    }
}


export async function POST(req: Request) {
    const { email, idPlace } = await req.json();

    console.log("Request received:", { email, idPlace });

    try {
        // Ejecutar la consulta
        const data = await client.execute({
            sql: `UPDATE "visitedPlaces" 
                  SET visited = 0
                  WHERE "idPlace" = ? 
                  AND "idUser" = (SELECT id FROM users WHERE email = ?);`,
            args: [idPlace, email],
        });

        console.log("Rows affected:", data.rowsAffected);

        if (data.rowsAffected > 0) {
            return NextResponse.json({ success: true }, { status: 200 });
        } else {
            return NextResponse.json(
                { success: false, message: "No matching rows found." },
                { status: 400 }
            );
        }
    } catch (error) {
        console.error("Error updating visitedPlaces:", error);
        return new Response(
            JSON.stringify({ error: error || "Unknown error" }),
            { status: 500 }
        );
    }
}
