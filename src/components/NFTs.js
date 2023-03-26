import React from 'react'
import nft from "../assets/nft (1).png";
import nft2 from "../assets/nft (2).png";
import nft3 from "../assets/nft (3).png";
import nft4 from "../assets/nft (4).png";

const NFTs = () => {
  return (
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
  )
}

export default NFTs