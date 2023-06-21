import React, { useState } from "react";

import "./style.scss";
import { ReactComponent as LoopeIcon } from "../../assets/loopicon.svg";
import ConversationListPage from "./conversationList";
import GroupsList from "./groupsList";


const ConversationComponent = () => {
  const [Color1, setColor1] = useState("#fff");
  const [Color2, setColor2] = useState("#1657FF");
  const [bgColor1, setbgColor1] = useState("#333248");
  const [bgColor2, setbgColor2] = useState("#333248");
  const [tab, setTab] = useState(false);

  const handleButtonClick = () => {
    setColor1(Color2);
    setColor2(Color1);
    setbgColor1(bgColor2);
    setbgColor2(bgColor1);
    setTab(!tab);
  };






  const [messages] = useState([
    {
      id: 1,
      name: "dfckzcldnscxzsfgksfgk;sdjkfgjksd",
      message:
        "Hellodfghdfghndfghkldfgjhdfklghjkdfghdfklghdfklgkldfgjhkldfgjhkldfgkhdfgh",
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

  const [groups] = useState([
    {
      id: 111,
      name: "dfckzcldnscxzsfgksfgk;sdjkfgjksd",
      message:
        "Hellodfghdfghndfghkldfgjhdfklghjkdfghdfklghdfklgkldfgjhkldfgjhkldfgkhdfgh",
    },
    {
      id: 211,
      name: "fscxjz",
      message: "Hello",
    },
    {
      id: 311,
      name: "sfnxzc",
      message: "Hello",
    },
    {
      id: 411,
      name: "fskxzckdsc",
      message: "Hello",
    },
    {
      id: 511,
      name: "fskxzckdsc",
      message: "Hello",
    },
    {
      id: 511,
      name: "fskxzckdsc",
      message: "Hello",
    },
    {
      id: 611,
      name: "fskxzckdsc",
      message: "Hello",
    },
    {
      id: 711,
      name: "fskxzckdsc",
      message: "Hello",
    },
    {
      id: 811,
      name: "fskxzckdsc",
      message: "Hello",
    },
    {
      id: 911,
      name: "fskxzckdsc",
      message: "Hello",
    },
    {
      id: 1011,
      name: "fskxzckdsc",
      message: "Hello",
    },

    {
      id: 1111,
      name: "fskxzckdsc",
      message: "Hello",
    },
    // {
    //   id: 12,
    //   name: "fskxzckdsc",
    //   message: "Hello",
    // },
    // {
    //   id: 13,
    //   name: "fskxzckdsc",
    //   message: "Hello",
    // },
    // {
    //   id: 14,
    //   name: "fskxzckdsc",
    //   message: "Hello",
    // },
    // {
    //   id: 15,
    //   name: "fskxzckdsc",
    //   message: "Hello",
    // },
  ]);

  return (

    <div className="conversations !w-[900px] rounded-[30px]  flex  flex-col  h-[100%] bg-[#333248] overflow-hidden ">
      <div className="conversation-header w-[100%] h-[8rem] bg-[#333248] flex justify-evenly ">
        <button
          className=" chat-btn !text-lg "
          style={{ color: Color2, backgroundColor: bgColor2 }}
          onClick={handleButtonClick}
        >
          Chats
        </button>
        <button
          className=" groups-btn !text-lg"
          style={{ color: Color1, backgroundColor: bgColor1 }}
          onClick={handleButtonClick}
        >
          Groups
        </button>
      </div>
      <div className=" search-div w-[100%] h-[5%] flex items-center justify-center ">
        <LoopeIcon className="search-icon bg-[#95ADEF] " />
        <input
          type="text"
          placeholder="What are you looking for?"
          className="search-input w-[100%] h-[100%] outline-none bg-[#95ADEF] "
        />
      </div>
      <div className="flex flex-col overflow-y-auto h-[80%]  conv">
        {tab === false
          ? messages.map((message) => (
              <ConversationListPage
                id={message.id}
                key={message.id}
                name={message.name}
                message={message.message}
              />
            ))
          : groups.map((group) => (
              <GroupsList
                id={group.id}
                key={group.id}
                name={group.name}
                message={group.message}
              />
            ))}
      </div>
    </div>
  );
};

export default ConversationComponent;
