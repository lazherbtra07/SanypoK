import React, { FC } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { IProduct } from "@/type/interfacies";
interface ProductContainerProps {
  item: IProduct[];
}
const ProductContainer: FC<ProductContainerProps> = ({ item }) => {
  return (
    <div>
      <div className="w-full grid lg:grid-cols-3">
        {item.map((prode) => (
          <div className=" ">
            <div className="   p-4 border rounded shadow-md m-2">
              <div className=" w-full h-[200px]  bg-[#f2f4f6] flex justify-center items-center rounded-lg">
                <Image
                  className=" "
                  alt="table"
                  src={urlFor(prode.image).url()}
                  width={100}
                  height={100}
                />
              </div>{" "}
              <div className=" p-2 mt-2  justify-between bg-[#f3f4f6] rounded-lg">
                <div className="flex justify-between font-bold text-[18px]">
                  <h3 className=" text-gray-400 ">{prode.title}</h3>
                  <h3 className="">${prode.price}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
