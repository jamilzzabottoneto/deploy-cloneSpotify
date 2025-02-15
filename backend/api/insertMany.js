import { artistArray } from "../assets/database/artists.js";
import { songsArray } from "../assets/database/songs.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((value, index) => {
  const newArtistObj = { ...value };
  delete newArtistObj.id;
  return newArtistObj;
});

const newSongsArray = songsArray.map((value, index) => {
  const newSongsObj = { ...value };
  delete newSongsObj.id;
  return newSongsObj;
});

const respSongs = await db.collection("songs").insertMany(newSongsArray);
const respArtists = await db.collection("artists").insertMany(newArtistArray);

console.log(respSongs);
console.log(respArtists);
