import clientPromise from "../lib/mongodb.js";

let db;

export async function connectToDb() {
  if (db) return db;
  
  const client = await clientPromise;
  db = client.db("urlShortener");
  return db;
}