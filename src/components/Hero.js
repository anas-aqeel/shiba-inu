import React from 'react'
import telegramLogo from "../assets/icon/Vector.png";
import twitterLogo from "../assets/icon/Vector.png";

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 px-4 sm:px-8 py-3 gap-x-10 gap-y-5">
    {/* bg-[length:100%_100%] */}
    <div className="md:col-span-2 h-[100%] lg:bg-[url('/src/assets/container.png')] bg-[url('/src/assets/container1.png')]  bg-no-repeat bg-[length:100%_100%]  w-[inherit]  flex justify-center md:px-14 px-5 py-20 flex-col">
      <p className=" mt-10  md:text-[50px] sm:text-[37px] text-[30px] text-white font-bold fontcustom">
        Revolutionizing the crypto world with Shaiba
      </p>
      <div className="flex md:0 sm:mt-10 mt-0">
        <div className="bg-[url('/src/assets/button1.png')] bg-[length:8rem_3rem]  bg-no-repeat h-12 w-32 cursor-pointer flex justify-center items-center text-white hover:-translate-y-1 duration-300">
          Buy
        </div>
        <div className="ml-3 bg-[url('/src/assets/button2.png')] bg-[length:8rem_3rem]  bg-no-repeat h-12 w-32 cursor-pointer flex justify-center items-center text-black hover:-translate-y-1 duration-300">
          Chat
        </div>
      </div>
    </div>
    <div className="flex items-center ">
      <div className="relative bg-opacity-[0.13] rounded-lg backdrop-blur-2xl bg-white p-5 bg-no-repeat text-white text-lg">
        Welcome to Shaiba, the ultimate Ai for the crypto community. With
        real-time information on coins, market trends, and popular Twitter
        users, Shaiba is the tool you need to stay ahead of the game. Our
        innovative token provides users with access to premium features,
        governance proposals, and revenue sharing through our
        revolutionary DAO. Join the Shaiba revolution today and start
        navigating the crypto world with ease.
      <div className="flex text-black font-bold absolute bg-white px-7 py-4 -bottom-12 right-[20%] rounded-b-3xl  ">
        Community
        <div className="ml-8 bg-black rounded-full p-[2px] h-7 w-7 flex justify-center items-center">
          <img src={telegramLogo} />
        </div>
        <div className="bg-black rounded-full h-7 w-7 p-[2px] flex justify-center items-center ml-2">
          <img src={twitterLogo} />
        </div>
      </div>
      </div>
    </div>
  </div>
  )
}

export default Hero
