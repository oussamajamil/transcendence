import React, { useRef, useEffect, useState } from "react";
import "./style.scss";
import { ReactComponent as LoopeIcon } from "../../assets/loopicon.svg";
import ConversationListPage from "./conversationList";
import GroupsList from "./groupsList";
import { io } from "socket.io-client";
import { getConversation } from "../../api/user";
import { Avatar } from "rsuite";
import img from "../../assets/hero5.png";
import sendimage from "../../assets/sendicon.png";
import InMasseg from "./inMessage";
import OutMasseg from "./outMessage";

function MessagesPage() {
  const [Color1, setColor1] = React.useState("#fff");
  const [Color2, setColor2] = React.useState("#1657FF");
  const [bgColor1, setbgColor1] = React.useState("#333248");
  const [bgColor2, setbgColor2] = React.useState("#333248");
  const [tab, setTab] = useState(false);

  React.useEffect(() => {
    getConversation("hdrabi").then((res) => {
      console.log(res);
    });
  }, []);

  const handleButtonClick = () => {
    setColor1(Color2);
    setColor2(Color1);
    setbgColor1(bgColor2);
    setbgColor2(bgColor1);
    setTab(!tab);
  };

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

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (chatContainerRef.current)
      chatContainerRef.current.scrollTop =
        chatContainerRef?.current.scrollHeight;
  };

  const [socket, setSocket] = useState<{
    emit: (arg0: string, arg1: string) => void;
  }>({} as any);

  useEffect(() => {
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
      <div className="game-container bg-[#FFFFFF] rounded-[50px] tect-[1.875rem]  flex items-center justify-center flex-col  h-[90%] w-full  gap-4 ">
        <h1 className="h1 w-full h-[1rem] ">Chat / Messages</h1>
        <div className=" chat-container  flex items-center justify-center gap-[3rem] w-[95%] h-[90%] py-4   ">
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
          <div className="chat w-[100%]  rounded-[30px] gap-5 h-[100%] flex items-center justify-start   flex-col bg-[#454469]  overflow-hidden  ">
            <h1 className=" no-cnv ">
              choose a chat to start the conversation
            </h1>
            <div className=" chat-header w-[100%] h-[10%] flex justify-between bg-[#2F2E41]  ">
              <div className=" con h-[100%] flex items-center justify-center left-container gap-3  ">
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
            <div
              className=" chat-body w-[90%] h-[70%] overflow-scroll  overflow-x-hidden bg-[#454469]  "
              ref={chatContainerRef}
            >
              {msg.map((message, index: number) =>
                message.dist === "in" ? (
                  <InMasseg
                    id={message.id}
                    key={message.id}
                    name={message.name}
                    message={message.messages}
                    img={img} />
                ) : (
                  <OutMasseg
                    id={message.id}
                    key={message.id}
                    name={message.name}
                    message={message.messages}
                    img={img} />
                )
              )}
            </div>
            <div className=" chat-footer w-[90%] h-[70px] m-[2rem] rounded-[50px]   ">
              <div className="relative flex w-full h-full rounded-[50px] bg-[#615E80]">
                <input
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  type="textarea"
                  placeholder="Write your message!"
                  className="w-[90%] h-full focus:outline-none focus:placeholder-gray-400 text-white text-sm placeholder-[#BACCFD] pl-12 bg-[#615E80] rounded-[50px] py-3"
                />
                <div className="absolute right-2 items-center inset-y-0 flex">
                  <button
                    type="button"
                    onClick={() => {
                      console.log(message);
                      socket.emit("test", message);
                    }}
                    className="inline-flex items-center justify-center rounded-[100%] px-4 py-3 transition duration-500 ease-in-out text-white bg-white hover:bg-blue-400 focus:outline-none "
                  >
                    <Avatar
                      src={sendimage}
                      circle
                      className=" !bg-transparent order-2 to-white  "
                    />
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
