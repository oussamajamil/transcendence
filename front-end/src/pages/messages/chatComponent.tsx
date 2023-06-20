import React, { useEffect, useRef, useState } from "react";

import "./style.scss";
import img from "../../assets/hero5.png";
import InMasseg from "./inMessage";
import OutMasseg from "./outMessage";
import { Avatar } from "rsuite";
import sendimage from "../../assets/sendicon.png";
import { io } from "socket.io-client";


const ChatComponent = () => {

    const [message, setMessage] = useState("");



    const chatContainerRef = useRef<HTMLDivElement>(null);

    
    const scrollToBottom = () => {
        if (chatContainerRef.current)
        chatContainerRef.current.scrollTop =
        chatContainerRef?.current.scrollHeight;
    };
    
    
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

useEffect(() => {
  scrollToBottom();
}, [message]);

const [socket, setSocket] = useState<{
    emit: (arg0: string, arg1: string) => void;
  }>({} as any);

  useEffect(() => {
    const socket = io("http://localhost:3001");
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
              {msg.map((message) =>
                message.dist === "in" ? (
                  <InMasseg
                    id={message.id}
                    key={message.id}
                    name={message.name}
                    message={message.messages}
                    img={img}
                  />
                ) : (
                  <OutMasseg
                    id={message.id}
                    key={message.id}
                    name={message.name}
                    message={message.messages}
                    img={img}
                  />
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
    );
}

export default ChatComponent;