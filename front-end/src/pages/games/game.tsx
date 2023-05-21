import React from "react";
import "./style.scss";

function Game({setMode}: {setMode: any} ) {
  return (
    <div className="game-container w-[100%] h-[100%] bg-[#FFFFFF] rounded-[50px] flex items-center justify-center flex-col ">
      <h1 className="h1">Game</h1>
      <div className="game-modes w-[100%] max-w-[80vw] h-[75%] flex items-center justify-center bg-[#FFF] rounded-[63px] ">
        <div className=" w-[100%] h-[100%] flex items-center flex-col justify-evenly  ">
            <h1 className="plytxt text-4xl md:text-5xl lg:text-6xl  ">Play VS Player</h1>
          <div className="input flex gap-3 items-center px-4  w-[31.25rem]">
            <input
              type="text"
              placeholder="invite a friend..."
              className="h-[50%] bg-transparent w-[100%] outline-none"
            />
            <div className="w-[50px] h-[45px] rounded-[100%] bg-[#1657FF] flex items-center justify-center btn-div ">
              <button className="text-xl w-4 h-4 bg-white rounded-[100%] flex items-center justify-center text-center span">
                +
              </button>
            </div>
          </div>
          <div className=" back-btn  flex items-center justify-center ">
            <p className="goback " >{`<`}</p>
            <button className=" goback-txt w-[100px] rounded-[100%] " onClick={() => {
                  setMode(0);
                }} >Go Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
