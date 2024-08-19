import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className=" ">
      <div className="">
        <div className="relative ">
          <Image
            className="h-screen lg:h-fit"
            alt="backround"
            src={"/Background.png"}
            width={1600}
            height={1200}
          />
        </div>
        <h1 className=" absolute w-fit px-6 lg:px-[10%] text-white top-[180px]    text-center  lg:text-[60px] text-[24px]  font-bold ">
          Create a Home Atmosphere As comfortable as your imagination
        </h1>
        <p className="absolute text-[#C6C0C0] top-[300px] lg:top-[380px]  w-fit px-[5%]  lg:px-[20%] text-center text-[14px]  lg:text-[20px] font-extralight">
          Liven up the atmosphere of the room with various products and
          collections of the best furniture choices! Find your dream furniture
          now
        </p>
        <div className=" absolute  mx-[5%] w-[90%] lg:mx-[30%] lg:w-[40%] flex justify-between top-[380px] lg:top-[490px] rounded-full bg-white  opacity-80">
          <input
            type="search"
            placeholder="look for furniture here"
            className="pl-2 rounded-full w-full text-[#8b8989] outline-none"
          />
          <button className="bg-[#F08C00] text-white rounded-full p-2 m-1">
            <Search />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
