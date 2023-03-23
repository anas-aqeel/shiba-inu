import "./index.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NFTs from "./components/NFTs";
import Loadar from "./Loader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return loading ? (
    <Loadar />
  ) : (
    <div className="bg-[#0C0E1D] p-4 sm:p-10  w-screen">
      <div className="lg:bg-[url('./assets/bg.png')] lg:bg-[length:100%_100%] bg-[length:100%_370vh] bg-[url('./assets/bg1.png')]  bg-no-repeat h-full w-full">
        <Navbar />
        <Hero />
        <NFTs />
      </div>
    </div>
  );
}

export default App;
