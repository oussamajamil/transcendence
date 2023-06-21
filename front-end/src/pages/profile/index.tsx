import React, { useEffect, useRef } from "react";
import ProfileBtn from "./ChangingProfilHolder";
import Achav from "../../assets/9-challenger.svg";
import Avatar from "./avatarcomponent";
// import "./style.scss";

// import iron from "../../assets/achievements/0-iron.svg";
// import bronze from "../../assets/achievements/1-bronze.svg";
// import silver from "../../assets/achievements/2-silver.svg";
// import gold from "../../assets/achievements/3-gold.svg";
// import plat from "../../assets/achievements/4-plat.svg";
// import diamond from "../../assets/achievements/5-diamond.svg";
// import knight from "../../assets/achievements/6-knight.svg";
// import goldenknight from "../../assets/achievements/7-goldenknight.svg";
// import master from "../../assets/achievements/8-master.svg";
// import challenger from "../../assets/achievements/9-challenger.svg";

interface Achievement {
  image: string;
  title: string;
  text: string;
}

function ProfilePage() {

  // const achievementsData: Achievement[] = [
  //   {
  //     image: iron,
  //     title: "Iron",
  //     text: "Triumph as iron, conquer with fire. Rise, overcome, aspire higher.",
  //   },
  //   {
  //     image: bronze,
  //     title: "Bronze",
  //     text: "Reaching the bronze title requires dedication, skill, and perseverance. It signifies progress, growth, and a step closer to greatness",
  //   },
  //   {
  //     image: silver,
  //     title: "Silver",
  //     text: "Lorem Ipsum lorepator who desiorel mundo la cupa dilaperva mostafaesti mulaca abepsum dolerum casa.",
  //   },
  //   {
  //     image: gold,
  //     title: "Gold",
  //     text: "Lorem Ipsum lorepator who desiorel mundo la cupa dilaperva mostafaesti mulaca abepsum dolerum casa.",
  //   },
  //   {
  //     image: plat,
  //     title: "Platinuim",
  //     text: "Lorem Ipsum lorepator who desiorel mundo la cupa dilaperva mostafaesti mulaca abepsum dolerum casa.",
  //   },
  //   {
  //     image: diamond,
  //     title: "Diamond",
  //     text: "Lorem Ipsum lorepator who desiorel mundo la cupa dilaperva mostafaesti mulaca abepsum dolerum casa.",
  //   },
  //   {
  //     image: knight,
  //     title: "Knight",
  //     text: "Lorem Ipsum lorepator who desiorel mundo la cupa dilaperva mostafaesti mulaca abepsum dolerum casa.",
  //   },
  //   {
  //     image: goldenknight,
  //     title: "Golden-Knight",
  //     text: "Lorem Ipsum lorepator who desiorel mundo la cupa dilaperva mostafaesti mulaca abepsum dolerum casa.",
  //   },
  //   {
  //     image: master,
  //     title: "Master",
  //     text: "Lorem Ipsum lorepator who desiorel mundo la cupa dilaperva mostafaesti mulaca abepsum dolerum casa.",
  //   },
  //   {
  //     image: challenger,
  //     title: "Faker",
  //     text: "Lorem Ipsum lorepator who desiorel mundo la cupa dilaperva mostafaesti mulaca abepsum dolerum casa.",
  //   },
  // ];

  return (
    // <div className="  w-full h-[80vh]  flex items-center justify-center gap-10  ">
    //   <div className=" w-[30%] min-w-[500px] max-w-[700px] h-[90%] max-h-[1300px] rounded-[30px] bg-white flex items-center justify-center flex-col overflow-hidden relative  shadow-xl ">
    //     <div className=" header w-[100%] h-[10%] max-h-[70px] ">
    //       <div className=" titel flex items-center justify-between w-[100%] max-w[100px] absolute top-[1rem] left-[1rem]  ">
    //         <h1 className=" h1 w-[100%] max-w-[100px]   ">Profil</h1>
    //       </div>
    //       <ProfileBtn />
    //     </div>
    //     <div className="  flex items-center justify-center flex-col translate-y-[2%] h-[80%] ">
    //       <Avatar />
    //       <div className=" w-[100%] flex flex-col items-center justify-center gap-1 relative ">
    //         <div className=" -translate-x-[120%] mt-5 ">
    //           <p className=" font-comfortaa text-[#BACCFD] text-[1.5rem] ">
    //             LEVEL XP
    //           </p>
    //         </div>
    //         <div className=" w-[100%] h-[3rem] rounded-[20px] bg-[#E7EBFF] overflow-hidden ">
    //           <div className=" w-[80%] h-[100%] bg-gradient-to-r from-gradient-blue to-gradient-purple rounded-[20px] box-shadow-inset "></div>
    //         </div>
    //         <div className="percent absolute bottom-[11%] font-Inter text-white text-[1.2rem] font-normal  ">
    //           90%
    //         </div>
    //       </div>
    //       <div className=" w-[100%] flex flex-col items-center justify-center gap-1 relative mt-8 ">
    //         <div className=" -translate-x-[127%] mt-5 ">
    //           <p className=" font-comfortaa text-[#BACCFD] text-[1.5rem] ">
    //             RANK XP
    //           </p>
    //         </div>
    //         <div className=" w-[100%] h-[3rem] rounded-[20px] bg-[#E7EBFF] overflow-hidden ">
    //           <div className=" w-[25%] h-[100%] bg-gradient-to-r from-gradient-red to-gradient-light-orange rounded-[20px] box-shadow-inset "></div>
    //         </div>
    //         <div className="percent absolute bottom-[11%] font-Inter text-white text-[1.2rem] font-normal  ">
    //           30%
    //         </div>
    //       </div>
    //       <div className="  flex items-center justify-center flex-col mt-12 w-[100%] max-w-[400px] ">
    //         <div className="">
    //           <p className=" font-comfortaa text-[1.5rem] uppercase text-[#BACCFD] ">
    //             current achievement
    //           </p>
    //         </div>
    //         <div className="  flex items-center justify-center bg-[#FBFCFF] rounded-[20px] p-2 mt-4 border-2 ">
    //           <div className=" flex items-center justify-center ">
    //             <img
    //               className=" h-[200px] pointer-events-none "
    //               src={Achav}
    //               alt="rank-symbol"
    //             />
    //           </div>
    //           <div className=" flex flex-col items-center justify-center w-[450px] h-[200px]  ">
    //             <div className=" mt-2 ">
    //               <span className=" font-lilita-one text-[#353E6C] text-[2rem]  tracking-wide uppercase ">
    //                 Faker!
    //               </span>
    //             </div>
    //             <div className=" break-words " style={{ inlineSize: "250px" }}>
    //               <p className=" font-Poppins  text-[1rem] text-[#2F2E41] leading-6 ">
    //                 Congratulations, Ping Pong Realm Faker! Unmatched skills,
    //                 prestigious title. Extraordinary achievement!
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className=" w-[75%] h-[90%] rounded-[30px] bg-white shadow-xl ">
    //     <div className="  flex items-center justify-between w-[100%]  flex-col  ">
    //       <h1 className=" h1 w-[100%] max-w-[100px]  pl-4 ">Achievements</h1>
    //     </div>
    //     <div className=" achiev w-[100%] h-[90%] max-h-[1200px] flex items-center justify-evenly flex-wrap content-center gap-4 overflow-scroll overflow-x-hidden debug px-8 ">
    //       {achievementsData.map((achievement, index) => (
    //         <div
    //           className="achievement flex items-center justify-center w-[100%] max-w-[800px] h-[10vh] border-[#EFF2FF] border-[2px] bg-[#FBFCFF] rounded-[20px] p-4 transform hover:scale-105 transition-all duration-300 hover:shadow-xl  "
    //           key={index}
    //         >
    //           <div className=" flex items-center justify-center overflow-hidden ">
    //             <img  className=" h-[100px] w-[100%] pointer-events-none " src={achievement.image} alt="rank-symbol" />
    //           </div>
    //           <div className=" flex flex-col items-center justify-center w-[80%] h-[100px]  ">
    //             <div className=" mb-3 ">
    //               <span className=" font-lilita-one text-[#353E6C] text-[1.58rem] leading-6 uppercase " >{achievement.title}</span>
    //             </div>
    //             <div className=" break-words " style={{ inlineSize: "500px" }} >
    //               <p className=" font-Poppins text-[1rem] text-[#2F2E41] leading-6 " >{achievement.text}</p>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div>test</div>
    );
}

export default ProfilePage;
