import React from "react";
import "./style.scss";

import iron from "../../assets/achievements/iron.png";
import bronze from "../../assets/achievements/bronz.png";
import silver from "../../assets/achievements/silver.png";
import gold from "../../assets/achievements/gold.png";
import plat from "../../assets/achievements/plat.png";
import diamond from "../../assets/achievements/diamond.png";
import knight from "../../assets/achievements/knight.png";
import goldenknight from "../../assets/achievements/golden-knight.png";
import master from "../../assets/achievements/master.png";
import challenger from "../../assets/achievements/challenger.png";


interface Achievement {
    image: string;
    title: string;
    text: string;
  }

function ProfileCart() {

    const achievementsData: Achievement[] = [
        {
          image: iron,
          title: "achave name",
          text: "Lorem Ipsum lorepator who desiorel mundo la cupa dilaperva mostafaesti mulaca abepsum dolerum casa.",
        },
        {
          image: bronze,
          title: "achave name",
          text: "Lorem Ipsum lorepator who desiorel mundo la cupa dilaperva mostafaesti mulaca abepsum dolerum casa.",
        },
        {
          image: silver,
          title: "achave name",
          text: "Lorem Ipsum lorepator who desiorel mundo la cupa dilaperva mostafaesti mulaca abepsum dolerum casa.",
        },
        {
          image: gold,
          title: "achave name",
          text: "Lorem Ipsum lorepator who desiorel mundo la cupa dilaperva mostafaesti mulaca abepsum dolerum casa.",
        },
        {
          image: plat,
          title: "achave name",
          text: "Lorem Ipsum lorepator who desiorel mundo la cupa dilaperva mostafaesti mulaca abepsum dolerum casa.",
        },
        {
          image: diamond,
          title: "achave named",
          text: "Lorem Ipsum lorepator who desiorel mundo la cupa dilaperva mostafaesti mulaca abepsum dolerum casa.",
        },
        {
          image: knight,
          title: "achave name",
          text: "Lorem Ipsum lorepator who desiorel mundo la cupa dilaperva mostafaesti mulaca abepsum dolerum casa.",
        },
        {
          image: goldenknight,
          title: "achave name",
          text: "Lorem Ipsum lorepator who desiorel mundo la cupa dilaperva mostafaesti mulaca abepsum dolerum casa.",
        },
        {
          image: master,
          title: "achave name",
          text: "Lorem Ipsum lorepator who desiorel mundo la cupa dilaperva mostafaesti mulaca abepsum dolerum casa.",
        },
        {
          image: challenger,
          title: "achave name",
          text: "Lorem Ipsum lorepator who desiorel mundo la cupa dilaperva mostafaesti mulaca abepsum dolerum casa.",
        },
      ];
    

  return (
    <div className=" w-[75%] h-[90%] rounded-[30px] bg-white shadow-xl min-w-[600px] overflow-hidden ">
      <div className="  flex  justify-between w-[100%]   flex-col  ">
        <h1 className=" h1 w-[100%] max-w-[100px] pt-4  pl-4 ">Achievements</h1>
      </div>
      <div className=" achiev w-[100%] h-[90%] max-h-[1200px] flex items-center  justify-evenly flex-wrap  gap-4 overflow-scroll overflow-x-hidden   px-8 ">
        {achievementsData.map((achievement, index) => (
          <div
            className="  flex items-center justify-center w-[100%] max-w-[800px] h-[200px] border-[#EFF2FF] border-[2px] bg-[#FBFCFF] rounded-[20px]  transform hover:scale-105 transition-all duration-300 hover:shadow-xl  "
            key={index}
          >
            <div className=" flex items-center justify-center overflow-hidden ">
              <img
                className=" h-[100px] w-[100%] pointer-events-none "
                src={achievement.image}
              />
            </div>
            <div className=" flex flex-col items-center justify-center w-[80%] h-[100px]  ">
              <div className=" mb-3 ">
                <span className=" font-lilita-one text-[#353E6C] text-[1.58rem] leading-6 uppercase ">
                  {achievement.title}
                </span>
              </div>
              <div
                className=" break-words max-w-[400px]  "
                style={{ inlineSize: "500px" }}
              >
                <p className=" font-Poppins text-[1rem] text-[#2F2E41] leading-6 ">
                  {achievement.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileCart;
