import { User } from "next-auth";
import client from "../conn/conn";
import { AdapterUser } from "next-auth/adapters";


export async function createUser(user : User | AdapterUser) {
  const checkIfUserExists = await client.execute({
    sql: "SELECT * FROM users WHERE email = ?",
    args: [user.email as string],
  });

  if(checkIfUserExists.rows.length > 0)return false;

  try {
    const insertUser = await client.execute({
      sql: "INSERT INTO users (name, email) VALUES (?, ?)",
      args: [user.name as string, user.email as string],
    });
  
    return insertUser.rowsAffected > 0 ;
    
  } catch (error) {
    console.error(error);
    return false;
  }

}