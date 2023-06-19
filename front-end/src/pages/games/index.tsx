import React, { ReactComponentElement } from "react";
import "./style.scss";
import Game from "./game.tsx";
import GameMode from "./gameMode.tsx";
import { ReactComponent as Rakita } from "../../assets/botplay.svg";
import { ReactComponent as Rakita2 } from "../../assets/rankedmode.svg";
import { ReactComponent as Rakita3 } from "../../assets/friendmode.svg";

function GamePage() {
  let page: ReactComponentElement<any> = <div></div>;
  const [mode, setMode] = React.useState<number>(0);


  if (mode === 0) {
    page = (
      <div className="game-container w-[100%] h-[100%] bg-[#FFFFFF] rounded-[50px] flex items-center justify-center flex-col ">
        <h1 className=" h1 ">Game</h1>
        <div className="game-modes w-[100%] max-w-[80vw] h-[75%] flex items-center justify-center bg-[#FFF] rounded-[63px] ">
          <div className="bg-image w-[100%] h-[100%] rounded-[50px] opacity-50 z-1 "></div>
          <div className="mode-pos flex items-center justify-center flex-wrap gap-[12rem]  ">
            <div className="mode1 modes">
             <Rakita className="rakita" />
              <button
                className="play-2 btn"
                onClick={() => {
                  setMode(2);
                }}
              >
                Play VS Bot
              </button>
            </div>
            <div className="mode2 modes">
              <Rakita2 className="rakita" />
              <button
                className="play-1 btn"
                onClick={() => {
                  setMode(1);
                }}
              >
                Play Ranked
              </button>
            </div>
            <div className="mode3 modes">
             <Rakita3 className="rakita" />
              <button
                className=" play-3 btn cursor-pointer "
                onClick={() => {
                  setMode(1);
                }}
              >
                Play VS Friend
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (mode === 1) {
    page = <Game setMode={setMode} />;
  } else if (mode === 2) {
    page = <GameMode />;
  }
  return page;
}

export default GamePage;
