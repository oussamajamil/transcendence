import React, { useEffect, useRef, useState } from "react";
import bg from "../../assets/bg-game.svg";
import "./style.scss";

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

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const divElement = divRef.current;
    if (divElement) {
      const { width, height } = divElement.getBoundingClientRect();
      console.log("Width: " + width + "px");
      console.log("Height: " + height + "px");
    }
  }, [windowSize]);

  return (
    <div className="game-container w-[100%] h-[100%] bg-[#FFFFFF] rounded-[50px] flex items-center justify-center flex-col debug ">
      <h1 className="h1">Game</h1>
      <div
        className=" w-[100%] h-[100%] flex items-center justify-center flex-col  ">
        <div
          className=" w-[30%] max-w-[80vw] h-[75%] flex items-center justify-center bg-black  "
          ref={divRef}
        ></div>
      </div>
    </div>
  );
}

export default GameModePage;
