import { client } from "@/sanity/lib/client";
import { IProduct, ProductCategory } from "@/type/interfacies";
import groq from "groq";

export async function getProduct(category: ProductCategory) {
  const query = groq`
*[_type == "product" && category == "${category}"]{
  price, 
  category, 
  title, 
  "image": image.asset->url}
`;
  const product = await client.fetch(query);
  return product as IProduct[];
}
