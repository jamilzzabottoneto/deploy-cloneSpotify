import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://jamilzabneto:9wosgkyfE1NP4q2C@clonespotify.r15qu.mongodb.net/?retryWrites=true&w=majority&appName=CloneSpotify";

const client = new MongoClient(URI);

export const db = client.db("cloneSpotify");

console.log(db);
