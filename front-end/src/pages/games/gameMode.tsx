import { useEffect, useRef, useState } from "react";
import { Bodies, Composite, Engine, Render, World, Body } from "matter-js";
import "./style.scss";

let engine: Engine, render: Render, box1: Body

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
    const divElement: HTMLElement = divRef.current;
    if (divElement) {
      const { width, height } = divElement.getBoundingClientRect();
      console.log("Width: " + width + "px");
      console.log("Height: " + height + "px");
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