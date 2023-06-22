import React from "react";
import "./style.scss";
import ProfileBtn from "./ChangingProfilHolder";
import Achav from "../../assets/9-challenger.svg";
import Avatar from "./avatarcomponent";

function ProfileCart() {
  return (
    <div className=" w-[30%] min-w-[500px] max-w-[700px] h-[90%] max-h-[1300px] rounded-[30px] bg-white flex items-center justify-center flex-col overflow-hidden relative  shadow-xl ">
      <div className=" header w-[100%] h-[10%] max-h-[70px] ">
        <div className=" titel flex items-center justify-between w-[100%] max-w[100px] absolute top-[1rem] left-[1rem]  ">
          <h1 className=" h1 w-[100%] max-w-[100px]   ">Profil</h1>
        </div>
        <ProfileBtn />
      </div>
      <div className="  flex items-center justify-center flex-col translate-y-[2%] h-[80%] ">
        <Avatar />
        <div className=" w-[100%] flex flex-col items-center justify-center gap-1 relative ">
          <div className=" -translate-x-[120%] mt-5 ">
            <p className=" font-comfortaa text-[#BACCFD] text-[1.5rem] ">
              LEVEL XP
            </p>
          </div>
          <div className=" w-[100%] h-[3rem] rounded-[20px] bg-[#E7EBFF] overflow-hidden ">
            <div className=" w-[80%] h-[100%] bg-gradient-to-r from-gradient-blue to-gradient-purple rounded-[20px] box-shadow-inset "></div>
          </div>
          <div className="percent absolute bottom-[11%] font-Inter text-white text-[1.2rem] font-normal  ">
            90%
          </div>
        </div>
        <div className=" w-[100%] flex flex-col items-center justify-center gap-1 relative mt-8 ">
          <div className=" -translate-x-[127%] mt-5 ">
            <p className=" font-comfortaa text-[#BACCFD] text-[1.5rem] ">
              RANK XP
            </p>
          </div>
          <div className=" w-[100%] h-[3rem] rounded-[20px] bg-[#E7EBFF] overflow-hidden ">
            <div className=" w-[25%] h-[100%] bg-gradient-to-r from-gradient-red to-gradient-light-orange rounded-[20px] box-shadow-inset "></div>
          </div>
          <div className="percent absolute bottom-[11%] font-Inter text-white text-[1.2rem] font-normal  ">
            30%
          </div>
        </div>
        <div className="  flex items-center justify-center flex-col mt-12 w-[100%] max-w-[400px] ">
          <div className="">
            <p className=" font-comfortaa text-[1.5rem] uppercase text-[#BACCFD] ">
              current achievement
            </p>
          </div>
          <div className="  flex items-center justify-center bg-[#FBFCFF] rounded-[20px] p-2 mt-4 border-2 ">
            <div className=" flex items-center justify-center ">
              <img
                className=" h-[200px] pointer-events-none "
                src={Achav}
                alt="rank-symbol"
              />
            </div>
            <div className=" flex flex-col items-center justify-center w-[450px] h-[200px]  ">
              <div className=" mt-2 ">
                <span className=" font-lilita-one text-[#353E6C] text-[2rem]  tracking-wide uppercase ">
                  Faker!
                </span>
              </div>
              <div className=" break-words " style={{ inlineSize: "250px" }}>
                <p className=" font-Poppins  text-[1rem] text-[#2F2E41] leading-6 ">
                  Congratulations, Ping Pong Realm Faker! Unmatched skills,
                  prestigious title. Extraordinary achievement!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCart;
