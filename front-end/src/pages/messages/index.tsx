import React from "react";
import "./style.scss";
import { ReactComponent as LoopeIcon } from "../../assets/loopicon.svg";
import { useState } from "react";
import ConversationListPage from "./conversationList";
import GroupsList from "./groupsList";
import { Avatar, Button } from "@material-tailwind/react";

function MessagesPage() {
  const [Color1, setColor1] = React.useState("#000000");
  const [Color2, setColor2] = React.useState("#1657FF");
  const [bgColor1, setbgColor1] = React.useState("#f4f6ff");
  const [bgColor2, setbgColor2] = React.useState("#baccfd");
  const [tab, setTab] = useState(false);

  const handleButtonClick = () => {
    setColor1(Color2);
    setColor2(Color1);
    setbgColor1(bgColor2);
    setbgColor2(bgColor1);
    setTab(!tab);
  };

  const [messages, setMessages] = useState([
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

  const [groups, setGroups] = useState([
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

  const [msg, setMsg] = useState([
    {
      id: 1,
      name: "dfckzcldnscxzsfgksfgk;sdjkfgjksd",
      messages: [
        "Hellodfghdfghndfghkldfgjhdfklghjkdfghdfklghdfklgkldfgjhkldfgjhkldfgkhdfgh",
        "sdfks;djfghsjkfghfg",
        "sdfks;djfghsjkfghfg",
        "sdfks;djfghsjkfghfg",
        "sdfks;djfghsjkfghfg",
        "sdfks;djfghsjkfghfg",
        "sdfks;djfghsjkfghfg",
      ],
      dist: "in",
    },
    {
      id: 2,
      name: "fscxjz",
      messages: ["Hello"],
      dist: "out",
    },
    {
      id: 3,
      name: "sfnxzc",
      messages: ["Hello"],
      dist: "in",
    },
    {
      id: 4,
      name: "fskxzckdsc",
      messages: ["Hello"],
      dist: "out",
    },
    {
      id: 5,
      name: "fskxzckdsc",
      messages: ["Hello"],
      dist: "in",
    },
    {
      id: 5,
      name: "fskxzckdsc",
      messages: [
        "Hellodfghdfghndfghkldfgjhdfklghjkdfghdfklghdfklgkldfgjhkldfgjhkldfgkhdfgh",
        "sdfks;djfghsjkfghfg",
        "sdfks;djfghsjkfghfg",
        "sdfks;djfghsjkfghfg",
        "sdfks;djfghsjkfghfg",
        "sdfks;djfghsjkfghfg",
        "sdfks;djfghsjkfghfg",
      ],
      dist: "out",
    },
    {
      id: 6,
      name: "fskxzckdsc",
      messages: ["Hello"],
      dist: "in",
    },
    {
      id: 7,
      name: "fskxzckdsc",
      messages: ["Hello"],
      dist: "out",
    },
    {
      id: 8,
      name: "fskxzckdsc",
      messages: ["Hello"],
      dist: "in",
    },
    {
      id: 9,
      name: "fskxzckdsc",
      messages: ["Hello"],
      dist: "out",
    },
    {
      id: 10,
      name: "fskxzckdsc",
      messages: ["Hello"],
      dist: "in",
    },

    {
      id: 11,
      name: "fskxzckdsc",
      messages: [
        "Hellodfghdfghndfghkldfgjhdfklghjkdfghdfklghdfklgkldfgjhkldfgjhkldfgkhdfgh",
        "sdfks;djfghsjkfghfg",
        "sdfks;djfghsjkfghfg",
        "sdfks;djfghsjkfghfg",
        "sdfks;djfghsjkfghfg",
        "sdfks;djfghsjkfghfg",
        "sdfks;djfghsjkfghfg",
      ],
      dist: "out",
    },
    {
      id: 12,
      name: "fskxzckdsc",
      messages: ["Hello"],
      dist: "in",
    },
    {
      id: 13,
      name: "fskxzckdsc",
      messages: ["Hello"],
      dist: "out",
    },
    {
      id: 14,
      name: "fskxzckdsc",
      messages: [
        "Hellodfghdfghndfghkldfgjhdfklghjkdfghdfklghdfklgkldfgjhkldfgjhkldfgkhdfgh",
        "sdfks;djfghsjkfghfg",
        "sdfks;djfghsjkfghfg",
        "sdfks;djfghsjkfghfg",
        "sdfks;djfghsjkfghfg",
        "sdfks;djfghsjkfghfg",
        "sdfks;djfghsjkfghfg",
      ],
      dist: "in",
    },
    {
      id: 15,
      name: "fskxzckdsc",
      messages: ["Hello"],
      dist: "out",
    },
  ]);

  return (
    <div className="game-container bg-[#FFFFFF] rounded-[50px] flex items-center justify-center flex-col  h-[90%] ">
      <h1 className="h1">Chat / Messages</h1>
      <div className=" chat-container  flex items-center justify-center gap-[3rem] w-[95%] h-[90%] py-4  ">
        <div className="conversations w-[30%] rounded-[30px]  flex  flex-col  h-full">
          <div className="conversation-header w-[100%] h-[8rem] flex justify-evenly ">
            <button
              className=" chat-btn "
              style={{ color: Color2, backgroundColor: bgColor2 }}
              onClick={handleButtonClick}
            >
              Chats
            </button>
            <button
              className=" groups-btn "
              style={{ color: Color1, backgroundColor: bgColor1 }}
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
        <div className="chat w-[65%] rounded-[30px] h-[100%] flex items-center justify-center  flex-col  ">
          <h1 className=" no-cnv ">choose a chat to start the conversation</h1>
          <div className=" chat-header w-[100%] h-[10%] flex justify-between ">
            <div className=" con h-[100%] flex items-center justify-center left-container gap-3 ">
              <Avatar
                src="https://as2.ftcdn.net/v2/jpg/01/24/30/67/1000_F_124306753_5lrF4qCOZLL2wFsyFfaJf6FprTTtcvnX.jpg"
                className=" ms-[4rem] my-[1rem] chat-img rounded-[50%] w-[70px] h-[70px] avat "
              />
              <div className=" left h-[100%] flex items-center justify-center flex-col ">
                <h2 className=" user-name ">user name</h2>
                <p className=" cnx-status ">online/offline</p>
              </div>
            </div>
            <div className=" right-container h-[100%]  flex items-center justify-center  ">
              <button className=" t-point  ">...</button>
              <div className=" w-[60px] h-[60px] bg-[#BACCFD] rounded-[100%] -translate-x-10 "></div>
            </div>
          </div>
          <div className=" chat-body w-[70%] h-[70%] overflow-scroll gap-1 px-4 ">
            {msg.map((message) =>
              message.dist === "in" ? (
                <div className="chat-message" key={message.id}>
                  <div className="flex items-end">
                    <div className="flex flex-col space-y-2 text- max-w-xs mx-2 order-2 items-start">
                      {message.messages.map((msge, index) => (
                        <div className=" ">
                          <span
                            className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gradient-to-br from-blue-600 to-red-500 text-white"
                            key={index}
                          >
                            {msge}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Avatar
                      src="https://as2.ftcdn.net/v2/jpg/01/24/30/67/1000_F_124306753_5lrF4qCOZLL2wFsyFfaJf6FprTTtcvnX.jpg"
                      className=" w-12 h-12 rounded-full order-1  "
                    />
                  </div>
                </div>
              ) : (
                <div className="chat-message" key={message.id}>
                  <div className="flex items-end justify-end">
                    <div className="flex flex-col space-y-2 text-lg max-w-xs mx-2 order-1 items-end">
                      {message.messages.map((msg, index) => (
                        <div>
                          <span
                            className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-gradient-to-tr from-red-600 via-transparent to-blue-300"
                            key={index}
                          >
                            {msg}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Avatar
                      src="https://as2.ftcdn.net/v2/jpg/01/24/30/67/1000_F_124306753_5lrF4qCOZLL2wFsyFfaJf6FprTTtcvnX.jpg"
                      className=" w-12 h-12 rounded-full order-2  "
                    />
                  </div>
                </div>
              )
            )}
          </div>
          <div className=" chat-footer w-[80%] h-[15%] ">
            <div className="relative flex w-full h-full">
              <input
                type="text"
                placeholder="Write your message!"
                className="w-full h-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-[#C4C4C4] pl-12 bg-white rounded-[10px] py-3"
              />
              <div className="absolute right-0 items-center inset-y-0 flex">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
                >
                  <span className="font-bold  ">Send</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-10 w-10 ml-2 transform rotate-90"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagesPage;
