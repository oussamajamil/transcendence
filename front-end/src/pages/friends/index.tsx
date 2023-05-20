import React from "react";
import { userType } from "../../utils/types";
import { player1, player2 } from "../../utils/data";

function FriendsPage() {
  const data: userType[] = [
    player1,
    player2,
    player1,
    player2,
    player1,
    player2,
    player1,
    player2,
    player1,
    player2,
  ];

  return (
    <div className="w-[90%] h-[90%] mx-auto flex gap-10">
      <div className="flex flex-col w-[30%] gap-10 max-h-full">
        <div className="px-[20px] py-[10px] flex flex-col w-full h-[200px] bg-white rounded-3xl gap-3">
          <div>
            <h1 className="text-[2rem] text-[#353E6C] font-['Lilita One'] font-black">
              Add Friend
            </h1>
          </div>
          <div className="flex flex-col w-full justify-center items-center gap-4">
            <input
              className="bg-[#F4F6FF] text-center text-[#BACCFD] text-[0.9rem] w-[90%] rounded-3xl h-[3rem] border-none outline-none"
              placeholder="Enter a username"
              type="text"
            />
            <button className="w-[70%] h-[3rem] text-center align-middle bg-[#1657FF] text-[0.9rem] text-white rounded-lg">
              Add a Friend
            </button>
          </div>
        </div>
        <div className="flex flex-col rounded-3xl py-[10px] max-h-[70%] bg-white gap-5">
          <div>
            <h1 className="text-[2rem] text-[#353E6C] font-['Lilita One'] font-black pl-[20px]">
              Invitations
            </h1>
          </div>
          <div className="flex flex-col gap-3 overflow-y-auto h-full w-full pl-[20px]">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-between items-center gap-5"
                >
                  <div className="flex gap-5">
                    <div className="w-[50px] h-[50px] rounded-full border border-[#000]">
                      <img
                        className="w-[100%] h-[100%]"
                        src={item.avatar}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[1.1rem] font-bold">
                        {item?.login}
                      </span>
                      <span className="text-[1rem] text-[#BACCFD]">
                        LVL {item?.level}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-[60px] h-[30px] bg-[#16DBCC] rounded-3xl"></div>
                    <div className="w-[60px] h-[30px] bg-[#FF5A5A] rounded-3xl"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default FriendsPage;
