import React, { useState, useEffect } from "react";

const CountdownDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date();
      const deadline = new Date("2025-08-15");
      if (today <= deadline) {
        setCurrentDate(today);
      } else {
        clearInterval(interval);
      }
    }, 1000 * 60 * 60 * 12);
    return () => clearInterval(interval);
  }, []);

  const day = currentDate.getDate();
  const month = currentDate.getMonth() === 7 ? "Aug" : "Jul";
  const year = 2025;

  return (
    <div className="flex flex-col items-center justify-center md:h-screen py-10 bg-[#f3f4ef] relative">
      <p className="text-4xl sm:text-2xl 2xl:text-5xl font-medium font-josefin text-gray-800 mb-4">
        Live from{" "}
        <span className="bg-gradient-to-b from-[#724935] to-[#D88A64] text-transparent bg-clip-text font-bold">
          15 August
        </span>
      </p>

      <div className="mt-4 w-full px-14 2xl:px-80 relative">
        {/* Fade overlay top */}
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-[#f3f4ef] to-transparent z-10 pointer-events-none" />
        {/* Fade overlay bottom */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-[#f3f4ef] to-transparent z-10 pointer-events-none" />
        <div className="relative overflow-hidden h-16 md:h-48 px-6 py-3 border-2 border-gray-500 rounded-4xl shadow-sm flex items-center justify-center">
          <span className="text-2xl sm:text-3xl 2xl:text-5xl font-bold bg-gradient-to-b from-[#724935] to-[#D88A64] text-transparent bg-clip-text transition duration-500">
            {day}
          </span>

          {/* Divider */}
          <div className="h-10 w-px bg-[#724935] mx-4"></div>

          <span className="text-2xl sm:text-3xl 2xl:text-5xl font-bold bg-gradient-to-b from-[#724935] to-[#D88A64] text-transparent bg-clip-text transition duration-500">
            {month}
          </span>

          {/* Divider */}
          <div className="h-10 w-0.5 bg-[#724935] mx-4"></div>

          <span className="text-2xl sm:text-3xl 2xl:text-5xl font-bold bg-gradient-to-b from-[#724935] to-[#D88A64] text-transparent bg-clip-text transition duration-500">
            {year}
          </span>
        </div>
      </div>

      
    </div>
  );
};

export default CountdownDate;
