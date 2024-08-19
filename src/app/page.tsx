import Furniture from "@/component/Furniture";
import Hero from "@/component/Hero";
import { Contact } from "@/component/Contact";
import Image from "next/image";
import { Inspirasi } from "@/component/Inspirasi";
import { Product } from "@/component/(product)/Product";

export default function Home() {
  return (
    <div>
      <Hero />
      <Furniture />
      <Product />
      <Contact />
      <Inspirasi />
    </div>
  );
}
