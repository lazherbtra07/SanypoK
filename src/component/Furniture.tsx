"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PencilRuler, Recycle, Truck } from "lucide-react";
import { getFurniture } from "@/lib/furniture";

interface Color {
  image: string;
  value: string;
}

const cardItem = [
  {
    logo: <Truck />,
    title: "Fast and Safe Delivery",
    script:
      "Every product we send will always arrive on time. We will look after your product until you receive it.",
  },
  {
    logo: <PencilRuler />,
    title: "Best Quality Contemporary Design",
    script:
      "The quality of the products available is guaranteed. With designs that follow current interior developments.",
  },
  {
    logo: <Recycle />,
    title: "Recycled and Environmentally Friendly Products",
    script:
      "The products we provide come from recycled products but are still of the best quality.",
  },
];

const Furniture = ({}) => {
  const [colors] = useState<Color[]>([
    { image: "/[Resizer 1.png", value: "#719fb5" },
    { image: "/[Resizer 1 (2).png", value: "green" },
    { image: "/[Resizer 1 (3).png", value: "#b35567" },
    { image: "/[Resizer 1 (4).png", value: "#4d61ab" },
  ]);
  const [selectedImage, setSelectedImage] = useState<string>(colors[0].image);

  const handleColorClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <section id="furniture" className="  py-10">
      <div className="flex flex-col gap-y-7 ">
        <div className="grid lg:grid-cols-3 container    pb-8">
          {cardItem.map((item) => (
            <div className=" hover:shadow-md rounded-md p-2 flex mb-6 lg:mb-0 gap-x-3">
              <span className="text-white h-fit bg-[#F08C00] p-2  rounded-full ">
                {item.logo}
              </span>
              <div>
                <h1 className="text-[20px] leading-6 font-semibold  text-[#2E2A2A] mb-4">
                  {item.title}
                </h1>
                <p className="text-[16px] text-[#686161] font-light ">
                  {item.script}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:flex">
          <div className="flex flex-col px-[5%]  lg:w-5/12 lg:pl-16">
            <h1 className="text-[36px] leading-10 font-bold pb-6">
              Furniture Collection for Room Inspiration
            </h1>
            <h4 className="text-[20px] font-medium text-[#2E2A2A] pb-2">
              Stocksund Inspiration Full set
            </h4>
            <p className="text-[16px] text-[#686161] font-extralight pb-2">
              The following is a design for a family TV room that is used to
              gather and relax. STOCKSUND sofas have a lot to offer space so
              that every family member and guest
            </p>
            <span className="text-[30px] font-bold text-[#F08C00] mb-4">
              Rp. 12.780.000
            </span>
            <div className="bg-gray-100 p-2 w-full hover:drop-shadow-md rounded-md flex   lg:w-5/6">
              <Image
                className="size-32 lg:size-[90px] "
                alt="immag"
                src={"/image 1 (1).png"}
                width={70}
                height={70}
              />
              <div>
                <h3 className="text-[20px] font-medium p-2 mb8">
                  Stocksund Sofa
                </h3>
                <div className="flex">
                  <span className="text-[16px]  font-light p-2">Color :</span>
                  <div className="p-2">
                    <div className="flex flex-wrap ">
                      {" "}
                      {colors.map((item) => (
                        <button
                          className={`m-1 p-2  size-5 rounded-full ${selectedImage == item.image ? "border-2 border-orange-500" : "border-0"}`}
                          style={{ backgroundColor: item.value }}
                          onClick={() => handleColorClick(item.image)}
                        ></button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-7/12 ">
            <Image
              className="w-full"
              alt="imag"
              src={selectedImage}
              width={600}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Furniture;
