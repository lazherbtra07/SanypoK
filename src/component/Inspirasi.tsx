import React from "react";
import Image from "next/image";

export const Inspirasi = () => {
  return (
    <section id="Inspirasi" className="  mt-10 mb-5">
      <div className="lg:flex  justify-center items-center">
        <div className="lg:w-1/2">
          <Image
            alt="inspi"
            src={"/Imagefotter.png"}
            width={1200}
            height={1200}
          />
        </div>
        <div className="lg:w-1/2 mt-5 lg:mt-0 container text-center lg:text-start">
          <h1 className="  text-[36px] font-semibold ">
            Get 30% Discount <br />
            For First Purchase
          </h1>
          <p className=" text-[16px] font-extralight text-[#8C8585]">
            Register immediately to get the best promotions now!
          </p>
          <button className=" mt-10 bg-[#F08C00] px-3 py-2 text-white rounded text-[16px] font-medium hover:bg-[#f5a12b]">
            {" "}
            Sign up now
          </button>
        </div>
      </div>
    </section>
  );
};
