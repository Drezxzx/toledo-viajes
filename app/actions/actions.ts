import { User } from "next-auth";
import client from "../conn/conn";
import { AdapterUser } from "next-auth/adapters";
import { Itinerary } from "@/types/types";


export async function createUser(user: User | AdapterUser) {
  const checkIfUserExists = await client.execute({
    sql: "SELECT * FROM users WHERE email = ?",
    args: [user.email as string],
  });

  if (checkIfUserExists.rows.length > 0) return false;

  try {
    const insertUser = await client.execute({
      sql: "INSERT INTO users (name, email) VALUES (?, ?)",
      args: [user.name as string, user.email as string],
    });

    if( insertUser.rowsAffected > 0){
      try {
        const createUser = await client.execute({
          sql : `INSERT INTO "visitedPlaces" ("idPlace", "idUser", visited) 
              SELECT id, (SELECT id FROM users WHERE email = ?), 0 FROM itinerary;`,
          args : [user.email as string]
        })
  
        return createUser.rowsAffected > 0;
        
      } catch (error) {
        console.log(error);
        return false;
      }
    }

  } catch (error) {
    console.error(error);
    return false;
  }

}

export async function getItineraryByUser(email: string) {
  const data = await client.execute({
    sql: `SELECT itinerary.id, day, place, hotels.name as hotel, hotels.image as hotelImage, itinerary.time as imagePlace, itinerary.image as timePlace, vp.visited FROM itinerary
    INNER JOIN hotels ON itinerary.idHotel = hotels.id
    INNER JOIN "visitedPlaces" as vp on vp."idPlace" = itinerary.id
    WHERE vp."idUser" = (SELECT id FROM users WHERE email = ?)
    ;`,
    args: [email]
  })
  return data.rows as unknown as Itinerary[];
}