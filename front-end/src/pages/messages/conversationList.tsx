import React from "react";
import "./conversationList.scss";
import { ReactComponent as ConvImage } from "../../assets/hero5.svg";
import { ReactComponent as Online } from "../../assets/online.svg";
import { Avatar, Button } from "@material-tailwind/react";

interface Props {
  id: number;
  name: string;
  message: string;
}

function ConversationListPage(props: Props) {
  return (
    <div className=" container flex items-center  gap-[3rem] cursor-pointer h-[100px]  ">
      <div className="flex  items-center  h-[100%] ">
        <ConvImage className=" ms-[4rem] my-[1rem] chat-img rounded-[50%]  " />
        <Online className=" online-icon -translate-y-8 -translate-x-5 " />
      </div>
      <div className="text flex justify-evenly flex-col gap-[1rem] ">
        <h1 className=" name ">{props.name}</h1>
        <p className="msg">{props.message}</p>
      </div>
    </div>
  );
}

export default ConversationListPage;
