import React from "react";
import { userType } from "../../utils/types";
import { player1, player2 } from "../../utils/data";
import { Toggle } from "rsuite";
import { useQuery } from "@tanstack/react-query";
// import { getUser, getUsers } from "../../api/user";

function FriendsPage() {
  // const currentUser = useQuery({
  //   queryKey: ["currentUser"],
  //   queryFn: () =>
  //     getUsers({
  //       where: { username: "kcriple0" },
  //     }),
  // });

  // console.log({ currentUser });

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
        <div className="flex flex-col rounded-3xl py-[10px] max-h-[70%] bg-white gap-5 overflow-hidden">
          <div>
            <h1 className="text-[2rem] text-[#353E6C] font-['Lilita One'] font-black pl-[20px]">
              Invitations
            </h1>
          </div>
          <div className="flex flex-col gap-3 overflow-y-auto h-full w-full pl-[20px]">
            {/* {data.map((item, index) => {
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
            })} */}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center flex-1 gap-2 bg-white rounded-3xl p-[10px]">
        <div>
          <h1 className="text-[2rem] text-[#353E6C] font-['Lilita One'] font-black">
            Friends List
          </h1>
        </div>
        <div className="flex justify-around w-full text-[#1657FF] text-[0.9rem]">
          <div className="w-[20%] flex justify-center">#</div>
          <div className="w-[20%] flex justify-center">USERNAME</div>
          <div className="w-[20%] flex justify-center">LVL</div>
          <div className="w-[20%] flex justify-center">BLOCKED</div>
          <div className="w-[20%] flex justify-center">DELETE</div>
        </div>
        <div className="w-full max-h-[90%] overflow-y-auto">
          {player1?.relations.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex justify-around w-full text-[#000000] text-[0.9rem] h-[60px] items-center ${
                  index % 2 === 0 ? "bg-[#DBE5FF]" : ""
                }`}
              >
                <div className="w-[20%] flex justify-center">
                  <div className="w-[50px] h-[50px] rounded-full border border-[#000]">
                    <img
                      className="w-[100%] h-[100%]"
                      src={item?.relationWith?.avatar}
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-[20%] flex justify-center">
                  <span className="text-[1.1rem] font-bold">
                    {item.relationWith.login}
                  </span>
                </div>
                <div className="w-[20%] flex justify-center">
                  <span className="text-[1.1rem] font-bold">
                    {item.relationWith.level}
                  </span>
                </div>
                <div className="w-[20%] flex justify-center">
                  <Toggle size="md" />
                </div>
                <div className="w-[20%] flex justify-center">
                  <div className="w-[60px] h-[30px] text-[#fff] text-[0.6rem] cursor-pointer rounded-3xl bg-red-500 flex justify-center items-center">
                    REMOVE
                  </div>
                </div>
              </div>
            );
          })}
          {player1?.relationsWith.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex justify-around w-full text-[#000000] text-[0.9rem] h-[60px] items-center ${
                  index % 2 === 0 ? "bg-[#DBE5FF]" : ""
                }`}
              >
                <div className="w-[20%] flex justify-center">
                  <div className="w-[50px] h-[50px] rounded-full border border-[#000]">
                    <img
                      className="w-[100%] h-[100%]"
                      src={item?.user?.avatar}
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-[20%] flex justify-center">
                  <span className="text-[1.1rem] font-bold">
                    {item.user.login}
                  </span>
                </div>
                <div className="w-[20%] flex justify-center">
                  <span className="text-[1.1rem] font-bold">
                    {item.user.level}
                  </span>
                </div>
                <div className="w-[20%] flex justify-center">
                  <Toggle size="md" />
                </div>
                <div className="w-[20%] flex justify-center">
                  <div className="w-[60px] h-[30px] text-[#fff] text-[0.6rem] cursor-pointer rounded-3xl bg-red-500 flex justify-center items-center">
                    REMOVE
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FriendsPage;
