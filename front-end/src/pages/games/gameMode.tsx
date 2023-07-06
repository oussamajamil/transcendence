import { useEffect, useRef, useState } from "react";
import { Game } from "./gameModel";
import "./style.scss";

let game: Game | null = null

function GameModePage() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const divRef = useRef(null);

  useEffect(() => {
    const divElement: any = divRef.current;
    if (divElement) {
      const { width, height } = divElement.getBoundingClientRect();
      if (game == null)
        game = new Game(divElement, width, height)
      else
        game.respensivness(width, height)
    }
  }, [windowSize]);

  return (
      <div className="game-container w-[100%] h-[100%] bg-[#FFFFFF] rounded-[50px] flex items-center justify-center flex-col ">
        <h1 className="h1">Game</h1>
          <div className=" w-[100%] max-w-[80vw] h-[75%] flex items-center justify-center  " ref={divRef}>
        </div>
      </div>
    );
}

export default GameModePage