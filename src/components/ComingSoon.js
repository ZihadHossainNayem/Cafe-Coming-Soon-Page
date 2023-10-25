import React, { useState } from "react";
import bg from "../assets/background.jpg";
import { CountdownClock } from "./CountdownClock";
import { BsInstagram, BsTwitter, BsFacebook, BsWhatsapp } from "react-icons/bs";

export const ComingSoon = () => {
  return (
    <div className="h-screen relative">
      <img
        src={bg}
        alt="bg"
        className="h-screen w-screen object-cover absolute top-0 -z-[10]"
      />
      <div className="bg-black bg-opacity-60 -z-[9] h-screen w-screen absolute top-0"></div>
      <div className="text-white flex flex-col justify-center items-center h-screen">
        {/* text */}
        <div className="flex flex-col items-center mb-12 gap-10">
          <h1 className="font-lora italic text-5xl font-semibold tracking-wider">
            CozyCup Cafe
          </h1>
          <h1 className="font-dancing  italic font-semibold md:text-7xl text-5xl text-center">
            Coming Soon to Gulshan
          </h1>
        </div>
        {/* timer */}
        <div className="text-5xl font-lora italic font-semibold mb-12">
          <CountdownClock />
        </div>
        {/* notification form */}
        <div className="mb-8">
          <form>
            <input
              type="text"
              placeholder="Email Address..."
              className="rounded-l-lg py-2 px-4 placeholder:font-lora placeholder:text-gray-500
              placeholder:italic text-gray-600 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#6F4E37] py-2 px-4 rounded-r-lg"
            >
              <span className="font-lora italic">Notify Me</span>
            </button>
          </form>
        </div>
        {/* socials */}
        <div className="flex gap-8 text-2xl">
          <a href="##" target="_blank" rel="noopener noreferrer">
            <BsFacebook />
          </a>
          <a href="##" target="_blank" rel="noopener noreferrer">
            <BsInstagram />
          </a>
          <a href="##" target="_blank" rel="noopener noreferrer">
            <BsTwitter />
          </a>
          <a href="##" target="_blank" rel="noopener noreferrer">
            <BsWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};
