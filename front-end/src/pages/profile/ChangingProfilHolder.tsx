import { useState } from "react";
import { ReactComponent as Points } from "../../assets/Tpoint.svg";
import { ReactComponent as ChangeAva } from "../../assets/changeavatar.svg";
import { ReactComponent as Resetname } from "../../assets/resetname.svg";

const ChangingProfilHolder = () => {
  const [btnShowUp, setBtnShowUp] = useState(false);

  const AppearBtn = () => {
    setBtnShowUp(!btnShowUp);
    console.log(btnShowUp);
  };

  return (
    <div className=" flex items-center justify-center w-[40px] h-[40px] rounded-[50%] bg-[#f4f6ff]  cursor-pointer absolute top-[1.5rem] right-[2rem] transition ease-in duration-400 hover:bg-[#dfe6ff]   ">
      <div
        className="  inline-block relative p-[10px] rounded-[50%] "
        onClick={AppearBtn}
      >
            <Points />
      </div>
      <div className={btnShowUp === false ? "dropProfil" : "dropProfil active"}>
        <div className=" ">
          <button className=" flex items-center justify-around gap-1 p-2 w-[100%] transition ease-in duration-300 bg-transparent hover:bg-[#e1e6fd] hover:transition-shadow cursor-pointer  active:bg-[#ffff] active:transition:duration-200  ">
            <ChangeAva />
            <span>Change Avatar</span>
          </button>
        </div>
        <div className="">
          <button className=" flex items-center justify-evenly gap-1 cursor-pointer p-2 transition ease-in duration-300 w-[100%] bg-transparent hover:transition-shadow hover:bg-[#e1e6fd] active:transition:duration-200 active:bg-[#fff]  ">
            <Resetname />
            <span>Reset Name</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangingProfilHolder;
