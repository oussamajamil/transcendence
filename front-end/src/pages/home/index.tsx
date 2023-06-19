import React from "react";
import "./style.scss";

function HomePage() {
  return <div className="w-[100%] h-[100%] debug flex  flex-col md:flex-col lg:flex-row">
    <div className="flex-1 flex flex-col">
      <div className="min-h-[14rem] p-4">
        <div className="w-full h-full border overflow-hidden rounded-3xl flex">
          <div className="w-[5%] h-full bg-[#62FFA1]"></div>
          <div className="flex-1  flex flex-col p-3 justify-center">
            <div className="text-[#353E6C] text-xl">Your Last match</div>
            <div className="flex-1 flex">
              <div className="flex-1"></div>
              <div className="my-auto text-5xl text-[#1657FF]">:</div>
              <div className="flex-1"></div>
            </div>
          </div>
          <div className="w-[5%] h-full  bg-[#FF7272]"></div>
        </div>
      </div>
      <div className="flex-1"></div>
      <div className="min-h-[14rem]"></div>
    </div>
    <div className="flex-1"></div>
  </div>;
}

export default HomePage;
