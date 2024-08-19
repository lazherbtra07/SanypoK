import { client } from "@/sanity/lib/client";
import { IFurniture } from "@/type/interfacies";
import groq from "groq";

export async function getFurniture() {
  const query = groq`
*[_type == "furniture"]{
  value, 
  "image": image.asset->url}
  `;
  const furniture = await client.fetch(query);
  return furniture as IFurniture;
}
