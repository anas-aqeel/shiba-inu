import "./index.css";
import logo from "./assets/logo (2).png";
import logoText from "./assets/logo (1).png";
import telegramLogo from "./assets/icon/Vector.png";
import nft from "./assets/nft (1).png";
import nft2 from "./assets/nft (2).png";
import nft3 from "./assets/nft (3).png";
import nft4 from "./assets/nft (4).png";

function App() {
  return (
    <div className="bg-[#0C0E1D] p-10  w-screen">
      <div className="md:bg-[url('./assets/bg.png')] md:bg-[length:100%_100%] bg-[length:100%_370vh] bg-[url('./assets/bg1.png')]  bg-no-repeat h-full w-full">
        {/* Navbar */}
        <div className="flex justify-between">
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          <div className="flex items-center">
            <img src={logo} className="h-10 w-10 rounded-full" />
            <img src={logoText} className="h-8 w-24 ml-3" />
          </div>
          <div></div>
          <div></div>
          <div className="relative ">
            <div className="absolute -top-2 right-2 border-[1px] w-32 border-white rounded-full text-white p-3 flex items-center">
              Chat Bot
              <div className="bg-white rounded-full h-7 w-7 flex justify-center items-center ml-2">
                <img src={telegramLogo} />
              </div>
            </div>
            <div className="invisible border-[1px] w-32 rounded-full p-3 flex items-center">
              Chat Bot
              <div className="bg-white rounded-full h-7 w-7 flex justify-center items-center ml-2">
                <img src={telegramLogo} />
              </div>
            </div>
          </div>
        </div>
        {/* Navbar Ends*/}

        {/* Container */}
        <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-cols-1 px-8 py-3 gap-4">
          <div className="md:col-span-2 h-[100%] md:bg-[url('./assets/container.png')] bg-[url('./assets/container1.png')]  w-[inherit] bg-[length:100%_100%] flex justify-center md:px-14 px-5 py-5 flex-col">
            <p className=" mt-10  md:text-[50px] sm:text-[37px] text-[30px] text-white font-bold fontcustom">
              Revolutionizing the crypto world with Shaiba
            </p>
            <div className="flex md:0 sm:mt-10 mt-0">
              <div className="bg-[url('./assets/button1.png')] bg-[length:8rem_3rem]  bg-no-repeat h-12 w-32 cursor-pointer flex justify-center items-center text-white">
                Buy
              </div>
              <div className="ml-3 bg-[url('./assets/button2.png')] bg-[length:8rem_3rem]  bg-no-repeat h-12 w-32 cursor-pointer flex justify-center items-center text-black">
                Chat
              </div>
            </div>
          </div>
          <div className="flex items-center relative">
            <div className=" bg-opacity-[0.13] rounded-lg backdrop-blur-2xl bg-white p-5 bg-no-repeat text-white text-lg">
              Welcome to Shaiba, the ultimate Ai for the crypto community. With
              real-time information on coins, market trends, and popular Twitter
              users, Shaiba is the tool you need to stay ahead of the game. Our
              innovative token provides users with access to premium features,
              governance proposals, and revenue sharing through our
              revolutionary DAO. Join the Shaiba revolution today and start
              navigating the crypto world with ease.
            </div>
            <div className="flex font-bold absolute bg-white px-7 py-4 -bottom-12 right-[22%] rounded-b-3xl left-[25%] ">
              Community
              <div className="ml-8 bg-black rounded-full h-7 w-7 flex justify-center items-center">
                <img src={telegramLogo} />
              </div>
              <div className="bg-black rounded-full h-7 w-7 flex justify-center items-center ml-2">
                <img src={telegramLogo} />
              </div>
            </div>
          </div>
        </div>
        {/* Container Ends*/}

        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2">
          <img
            src={nft}
            className="h-full w-full mx-auto cursor-pointer duration-200 hover:-translate-y-2"
          />
          <img
            src={nft2}
            className="h-full w-full mx-auto cursor-pointer duration-200 hover:-translate-y-2"
          />
          <img
            src={nft}
            className="h-full w-full mx-auto cursor-pointer duration-200 hover:-translate-y-2"
          />
          <img
            src={nft}
            className="h-full w-full mx-auto cursor-pointer duration-200 hover:-translate-y-2"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
