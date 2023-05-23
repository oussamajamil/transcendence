import React from "react";
import "./conversationList.scss";
import { ReactComponent as ConvImage } from "../../assets/hero5.svg";
import { ReactComponent as Online } from "../../assets/online.svg";
import {Avatar} from 'rsuite';
interface Props {
  id: number;
  name: string;
  message: string;
}

function ConversationListPage(props: Props) {
  const [Color, setColor] = React.useState("#baccfd");
  const [BgColor, setbgColor] = React.useState("#f4f6ff");

  const handleButtonClick = () => {
    setColor("#1657FF");
    setbgColor("#baccfd");
  };

  const [isActive, setIsActive] = React.useState(false);
  
  const handleClick = () => {
    setIsActive(true);
  };

  let text = props.message;
  if (text.length > 20) {
    text = text.slice(0, 20) + "...";
  }
  let name = props.name;
  if (name.length > 15) {
    name = name.slice(0, 15) + "...";
  }

  return (
    <div
      className=" chat-container-cmp flex items-center  gap-[3rem] cursor-pointer h-[100px] min-w-[400px] hover:bg-[#BACCFD] "
    >
      <div className="flex  items-center  h-[100%] ">
        <Avatar
          src="https://as2.ftcdn.net/v2/jpg/01/24/30/67/1000_F_124306753_5lrF4qCOZLL2wFsyFfaJf6FprTTtcvnX.jpg"
          className=" ms-[4rem] my-[1rem] chat-img rounded-[50%] w-[70px] h-[70px]  "
        />
        <Online className=" online-icon -translate-y-8 -translate-x-5 " />
      </div>
      <div className="text flex justify-evenly flex-col gap-[1rem] ">
        <h1 className=" name ">{name}</h1>
        <p className="msg  ">{text}</p>
      </div>
    </div>
  );
}

export default ConversationListPage;
