"use client";
import { AlignJustify, ShoppingBag } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "@/components/navLink";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isClicked, setisClicked] = useState();
  return (
    <nav className="container absolute py-5  lg:px-20  z-10 ">
      <div className="  flex justify-between  items-center">
        <div className=" lg:hidden">
          <Sheet>
            <SheetTrigger>
              <ShoppingBag size={25} color={"#F08C00"} className=" lg:hidden" />
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle>
                  {" "}
                  <h1 className="text-[24px] text-black font-bold">
                    Your <span className="text-[#F08C00]">Cart</span>
                  </h1>
                </SheetTitle>
                <SheetDescription>
                  <p className="mt-10 text-[20px]">Empty</p>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <h1 className="text-[24px] text-white font-bold">
          Sany<span className="text-[#F08C00]">pok</span>
        </h1>
        <div className=" hidden lg:flex justify-center items-center gap-5 text-[18px]  text-[#C6C0C0] font-medium">
          {NavLink.map((link, index) => (
            <div className=" " key={index}>
              <Link
                onClick={() => setisClicked}
                className={`hover:text-gray-600 ${isClicked == true ? " border-b-0 border-orange-500" : ""}`}
                href={link.href}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>
        <Sheet>
          <SheetTrigger>
            <ShoppingBag
              size={25}
              color={"#F08C00"}
              className="hidden lg:block"
            />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                {" "}
                <h1 className="text-[24px] text-black font-bold">
                  Your <span className="text-[#F08C00]">Cart</span>
                </h1>
              </SheetTitle>
              <SheetDescription>
                <p className="mt-10 text-[20px]">Empty</p>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        {/* mobile mood */}
        <div className=" lg:hidden">
          <Sheet>
            <SheetTrigger>
              <AlignJustify color="white" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  {" "}
                  <h1 className="text-[24px] text-black font-bold">
                    Sany<span className="text-[#F08C00]">pok</span>
                  </h1>
                </SheetTitle>
                <SheetDescription>
                  <div className=" mt-7 flex flex-col justify-center items-center gap-10 text-[18px]  text-[#C6C0C0] font-medium">
                    {NavLink.map((link, index) => (
                      <div className=" " key={index}>
                        <Link className="hover:text-gray-600" href={link.href}>
                          {link.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
