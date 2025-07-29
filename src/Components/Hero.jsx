import React from "react";
import DesktopBG from "/src/assets/Landing.jpg";
import MobileBG from "/src/assets/Mobile_Landing.jpg";

export const Hero = () => {
  return (
    <div className="relative h-screen w-full">
    {/* Desktop Background */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${DesktopBG})` }}
      />

      {/* Mobile Background */}
      <div
        className="block md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${MobileBG})` }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-6xl sm:text-6xl md:text-9xl 2xl:text-[11rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#724935] to-[#D88A64] mb-70">
          FURNICHO
        </h1>
      </div>
    </div>
  );
};
