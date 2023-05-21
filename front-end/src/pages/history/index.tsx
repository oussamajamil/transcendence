import React from "react";
import { player1 } from "../../utils/data";
function HistoryPage() {
  return (
    <div className="w-[90%] h-[90%] rounded-[30px] bg-white mx-auto p-[25px]">
      <h1 className="text-[2rem] text-[#353E6C] font-['Lilita One'] font-black">
        History
      </h1>
      <div className="inline-flex p-[5px] gap-5 flex-wrap overflow-auto max-h-[90%] justify-around">
        {[...player1?.winHistory, ...player1?.loseHistory].map((match) => {
          return (
            <div
              key={match.id}
              className="w-[300px] h-[100px] bg-[#EFF2FF] flex justify-between items-center"
            >
              <div
                className={`h-full w-[20px] ${
                  player1 === match.winner ? "bg-green-500" : "bg-red-600"
                }`}
              >
                {player1 === match.winner ? (
                  <div className="flex flex-col justify-center items-center h-[100%] text-[0.8rem] text-white font-bold">
                    <span>W</span>
                    <span>I</span>
                    <span>N</span>
                  </div>
                ) : (
                  <div className="flex flex-col justify-center items-center h-[100%] text-white text-[0.8rem] font-bold">
                    <span>L</span>
                    <span>O</span>
                    <span>S</span>
                    <span>E</span>
                  </div>
                )}
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[0.8rem] font-bold">
                  {player1 === match.winner
                    ? match.winner.login
                    : match.loser.login}
                </span>
                <span className="text-[0.5rem] text-[#BACCFD]">
                  {player1 === match.winner
                    ? match.winner.rank
                    : match.loser.rank}
                </span>
              </div>
              <div className="w-[50px] h-[50px] rounded-full border border-[#000]">
                <img
                  className="w-[100%] h-[100%]"
                  src={
                    player1 === match.winner
                      ? match.winner.avatar
                      : match.loser.avatar
                  }
                  alt=""
                />
              </div>
              <div className="text-[#1657FF] text-[2rem] font-black">:</div>
              <div className="w-[50px] h-[50px] rounded-full border border-[#000]">
                <img
                  className="w-[100%] h-[100%]"
                  src={
                    player1 !== match.winner
                      ? match.winner.avatar
                      : match.loser.avatar
                  }
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[0.8rem] font-bold">
                  {player1 !== match.winner
                    ? match.winner.login
                    : match.loser.login}
                </span>
                <span className="text-[0.5rem] text-[#BACCFD]">
                  {player1 !== match.winner
                    ? match.winner.rank
                    : match.loser.rank}
                </span>
              </div>
              <div
                className={`h-full w-[20px] ${
                  player1 !== match.winner ? "bg-green-500" : "bg-red-600"
                }`}
              >
                {player1 !== match.winner ? (
                  <div className="flex flex-col justify-center items-center h-[100%] text-[0.8rem] text-white font-bold">
                    <span>W</span>
                    <span>I</span>
                    <span>N</span>
                  </div>
                ) : (
                  <div className="flex flex-col justify-center items-center h-[100%] text-white text-[0.8rem] font-bold">
                    <span>L</span>
                    <span>O</span>
                    <span>S</span>
                    <span>E</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default HistoryPage;
