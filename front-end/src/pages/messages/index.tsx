import React from "react";
import "./style.scss";
import { ReactComponent as LoopeIcon } from "../../assets/loopicon.svg";
import { useState } from "react";
import ConversationListPage from "./conversationList";

function MessagesPage() {
  const [Color1, setColor1] = React.useState("#000000");
  const [Color2, setColor2] = React.useState("#1657FF");

  const handleButtonClick = () => {
    setColor1(Color2);
    setColor2(Color1);
  };
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "dfckzcldnscxz",
      message: "Hello",
    },
    {
      id: 2,
      name: "fscxjz",
      message: "Hello",
    },
    {
      id: 3,
      name: "sfnxzc",
      message: "Hello",
    },
    {
      id: 4,
      name: "fskxzckdsc",
      message: "Hello",
    },
    {
      id: 5,
      name: "fskxzckdsc",
      message: "Hello",
    },
    {
      id: 5,
      name: "fskxzckdsc",
      message: "Hello",
    },
    {
      id: 6,
      name: "fskxzckdsc",
      message: "Hello",
    },
    {
      id: 7,
      name: "fskxzckdsc",
      message: "Hello",
    },
    {
      id: 8,
      name: "fskxzckdsc",
      message: "Hello",
    },
    {
      id: 9,
      name: "fskxzckdsc",
      message: "Hello",
    },
    {
      id: 10,
      name: "fskxzckdsc",
      message: "Hello",
    },

    {
      id: 11,
      name: "fskxzckdsc",
      message: "Hello",
    },
    {
      id: 12,
      name: "fskxzckdsc",
      message: "Hello",
    },
    {
      id: 13,
      name: "fskxzckdsc",
      message: "Hello",
    },
    {
      id: 14,
      name: "fskxzckdsc",
      message: "Hello",
    },
    {
      id: 15,
      name: "fskxzckdsc",
      message: "Hello",
    },
  ]);

  return (
    <div className="game-container bg-[#FFFFFF] rounded-[50px] flex items-center justify-center flex-col  h-[90%] ">
      <h1 className="h1">Chat / Messages</h1>
      <div className=" chat-container  flex items-center justify-center gap-[3rem] w-[95%] h-[90%] py-4  ">
        <div className="conversations w-[30%] rounded-[30px] flex  flex-col   h-full">
          <div className="conversation-header w-[100%] h-[8rem] flex justify-evenly ">
            <button
              className=" chat-btn "
              style={{ color: Color2 }}
              onClick={handleButtonClick}
            >
              Chats
            </button>
            <button
              className=" groups-btn "
              style={{ color: Color1 }}
              onClick={handleButtonClick}
            >
              Groups
            </button>
          </div>
          <div className=" search-div w-[100%] h-[5%] flex items-center justify-center ">
            <LoopeIcon className="search-icon" />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="search-input w-[100%] h-[100%] outline-none"
            />
          </div>
          <div className="flex flex-col overflow-y-auto h-[80%]">
            {messages.map((message) => (
              <ConversationListPage
                id={message.id}
                key={message.id}
                name={message.name}
                message={message.message}
              />
            ))}
          </div>
        </div>
        <div className="chat w-[65%] rounded-[30px] h-[100%] flex items-center justify-center overflow-scroll ">
          <h1 className=" no-cnv ">choose a chat to start the conversation</h1>
        </div>
      </div>
    </div>
  );
}

export default MessagesPage;
