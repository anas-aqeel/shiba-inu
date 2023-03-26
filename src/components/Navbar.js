import React from "react";
import logo from "../assets/logo (2).png";
import logoText from "../assets/logo (1).png";
import telegramLogoDark from "../assets/icon/Vector12.png";
const Navbar = () => {
  return (
    <div className="h-20 flex justify-between">
      <div className="absolute top-7 sm:top-12 right-[58%] md:right-[61%] lg:right-[43.5%] flex items-center">
        <img src={logo} className="md:h-10 md:w-12 h-5 w-3 rounded-full" />
        <img src={logoText} className="md:h-8 md:w-24 ml-3 h-6 w-16" />
      </div>

      <div className="absolute top-[1rem] sm:top-[1.5rem] lg:top-[2.5rem] right-[3.5rem] border-[1px] sm:w-28 md:w-32 border-white rounded-full text-white p-1 sm:p-3 flex items-center">
        ChatBot
        <div className="bg-white rounded-full h-7 w-7 flex justify-center items-center ml-2">
          <img src={telegramLogoDark} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
