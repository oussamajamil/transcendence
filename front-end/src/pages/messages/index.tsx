import React from "react";
import "./style.scss";
import { ReactComponent as LoopeIcon } from "../../assets/loopicon.svg";
import { ReactComponent as ConvImage } from "../../assets/hero5.svg";
import { ReactComponent as SendImage } from "../../assets/send-plane-fill 1.svg";
import { useState } from "react";
import ConversationListPage from "./conversationList";
import GroupsList from "./groupsList";
import { BsEnvelopePaper, BsJustify } from "react-icons/bs";
import { io } from "socket.io-client";
import axios from "axios";
// import { getConversation } from "../../api/user";
import { Avatar } from "rsuite";
import img from "../../assets/hero5.png";

function MessagesPage() {
  const [Color1, setColor1] = React.useState("#fff");
  const [Color2, setColor2] = React.useState("#1657FF");
  const [bgColor1, setbgColor1] = React.useState("#333248");
  const [bgColor2, setbgColor2] = React.useState("#333248");
  const [tab, setTab] = useState(false);

  // React.useEffect(() => {
  //   getConversation("hdrabi").then((res) => {
  //     console.log(res);
  //   });
  // }, []);

  const handleButtonClick = () => {
    setColor1(Color2);
    setColor2(Color1);
    setbgColor1(bgColor2);
    setbgColor2(bgColor1);
    setTab(!tab);
  };

  React.useEffect(() => {
    const handleResize = () => {
      console.log();
      if (window.innerWidth > 1400) {
        console.log("---- ----------", window.innerWidth);
        setIsTab(true);
        setIsOpen(true);
      } else {
        setIsOpen(false);
        setIsTab(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [message, setMessage] = useState("");
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

  const [groups, setGroups] = useState([
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

  const [msg, setMsg] = useState([
    {
      id: 122,
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
      id: 222,
      name: "fscxjz",
      messages: ["Hello"],
      dist: "out",
    },
    {
      id: 322,
      name: "sfnxzc",
      messages: ["Hello"],
      dist: "in",
    },
    {
      id: 422,
      name: "fskxzckdsc",
      messages: ["Hello"],
      dist: "out",
    },
    {
      id: 522,
      name: "fskxzckdsc",
      messages: ["Hello"],
      dist: "in",
    },
    {
      id: 522,
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
      id: 622,
      name: "fskxzckdsc",
      messages: ["Hello"],
      dist: "in",
    },
    {
      id: 722,
      name: "fskxzckdsc",
      messages: ["Hello"],
      dist: "out",
    },
    {
      id: 822,
      name: "fskxzckdsc",
      messages: ["Hello"],
      dist: "in",
    },
    {
      id: 922,
      name: "fskxzckdsc",
      messages: ["Hello"],
      dist: "out",
    },
    {
      id: 1022,
      name: "fskxzckdsc",
      messages: ["Hello"],
      dist: "in",
    },

    {
      id: 1122,
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
      id: 1222,
      name: "fskxzckdsc",
      messages: ["Hello"],
      dist: "in",
    },
    {
      id: 1322,
      name: "fskxzckdsc",
      messages: ["Hello"],
      dist: "out",
    },
    {
      id: 1422,
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
      id: 1522,
      name: "fskxzckdsc",
      messages: ["Hello"],
      dist: "out",
    },
  ]);

  const [isOpen, setIsOpen] = useState(true);
  const [isTab, setIsTab] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [socket, setSocket] = useState<{
    emit: (arg0: string, arg1: string) => void;
  }>({} as any);
  const [messagesList, setMessagesList] = useState([]);

  React.useEffect(() => {
    const socket = io("http://localhost:3000");
    setSocket(socket as any);
    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("test", (message) => {
      console.log(message);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="min-w-[50vh] w-full h-[90vh]  ">
      <div className="game-container bg-[#FFFFFF] rounded-[50px] flex items-center justify-center flex-col  h-[90%] w-full  gap-4 ">
        <h1 className="h1 w-full h-[1rem] ">Chat / Messages</h1>
        <div className=" chat-container  flex items-center justify-center gap-[3rem] w-[95%] h-[90%] py-4   ">
          <div className="conversations w-[30%] rounded-[30px]  flex  flex-col  h-[100%]">
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
          <div className="chat w-[100%] rounded-[30px] gap-5 h-[100%] flex items-center justify-start  flex-col  overflow-hidden  ">
            <h1 className=" no-cnv ">
              choose a chat to start the conversation
            </h1>
            <div className=" chat-header w-[100%] h-[10%] flex justify-between  ">
              <div className=" con h-[100%] flex items-center justify-center left-container gap-3 ">
                <Avatar
                  src={img}
                  size="lg"
                  circle
                  className=" ms-[4rem] my-[1rem] !bg-transparent "
                />
                <div className=" left h-[100%] flex items-center justify-center flex-col ">
                  <h2 className=" user-name ">user name</h2>
                  <p className=" cnx-status ">online/offline</p>
                </div>
              </div>
              <div className=" right-container h-[100%]  flex items-center justify-center  ">
                <button className=" t-point  ">...</button>
                <div className=" w-[60px] h-[60px] bg-[#6B6B7A] rounded-[100%] -translate-x-10 cir "></div>
              </div>
            </div>
            <div className=" chat-body w-[90%] h-[70%] overflow-scroll gap-1 overflow-x-hidden debug  ">
              {msg.map((message, index: number) =>
                message.dist === "in" ? (
                  <div className="chat-message" key={index}>
                    <div className="flex items-end tree-one">
                      <div className="flex flex-col space-y-2 text- max-w-xs mx-2 order-2 items-start">
                        {message.messages.map((msge, index) => (
                          <div className=" tree-two " key={index}>
                            <span className=" msg  px-4 py-2 rounded-lg inline-block rounded-bl-none  text-white">
                              {msge}
                            </span>
                          </div>
                        ))}
                      </div>
                      <Avatar
                        src={img}
                        size="lg"
                        circle
                        className="!bg-transparent"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="chat-message">
                    <div className="flex items-end justify-end tree-one">
                      <div className="flex flex-col space-y-2 text-lg max-w-xs mx-2 order-1 items-end tree-two">
                        {message.messages.map((msg, index) => (
                          <div key={"message" + index} className="">
                            <span className="px-4 py-2 rounded-lg inline-block rounded-br-none text-white msg1 max-w-[200px] break-words">
                              {msg}
                            </span>
                          </div>
                        ))}
                      </div>
                      <Avatar
                        src={img}
                        size="lg"
                        circle
                        className=" !bg-transparent order-2  "
                      />
                    </div>
                  </div>
                )
              )}
            </div>
            <div className=" chat-footer w-[90%] h-[70px]  ">
              <div className="relative flex w-full h-full rounded-[50px] bg-[#615E80]">
                <input
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  type="textarea"
                  placeholder="Write your message!"
                  className="w-[90%] h-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-[#BACCFD] pl-12 bg-[#615E80] rounded-[50px] py-3 overflow-scroll"
                />
                <div className="absolute right-2 items-center inset-y-0 flex">
                  <button
                    type="button"
                    onClick={() => {
                      console.log(message);
                      socket.emit("test", message);
                    }}
                    className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none "
                  >
                    <SendImage className="send-icon " />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagesPage;
