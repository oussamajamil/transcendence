import React, { useEffect, useState } from "react";
import "./style.scss";
import ProfileCart from "./profilecart";
import AchievCart from "./achievcart";

function ProfilePage() {
  const [isFlipped, setIsFlipped] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  if (windowSize.width > 1250)
    return (
      <div className="  w-full h-[80vh]  flex items-center justify-center gap-10  ">
        <ProfileCart />
        <AchievCart />
      </div>
    );
    else
      return (
    <div className="  w-full h-[80vh]  flex items-center justify-center gap-10  ">
      <div
        className={`flip-card ${isFlipped ? "flipped" : ""}`}
        onClick={handleClick}
      >
        <div className="flip-card-inner flex items-center justify-center  content-center ">
          <div className="flip-card-front  ">
            <ProfileCart />
          </div>
          <div className="flip-card-back">
            <AchievCart />
          </div>
        </div>
      </div>
    </div>
    // <div>test</div>
  );
}

export default ProfilePage;
