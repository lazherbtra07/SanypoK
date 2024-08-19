import React from "react";

export const Footer = () => {
  return (
    <footer className="container py-5">
      <div className="flex justify-between text-[#8C8585] text-[16px]">
        <h3 className="">2020 © All Right Reserved</h3>
        <div>
          <ul className="flex gap-x-5 underline ">
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
