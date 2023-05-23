import React from "react";
import "./groupsList.scss";
import { ReactComponent as ConvImage } from "../../assets/hero5.svg";
import { ReactComponent as Online } from "../../assets/online.svg";
import { Avatar, Button } from "@material-tailwind/react";

interface Props {
  id: number;
  name: string;
  message: string;
}

function groupsList(props: Props) {
  let text = props.message;
  if (text.length > 20) {
    text = text.slice(0, 20) + "...";
  }
  let name = props.name;
  if (name.length > 15) {
    name = name.slice(0, 15) + "...";
  }

  return (
    <div className=" container-grp flex items-center  gap-[3rem] cursor-pointer h-[100px] min-w-[400px]  hover:bg-[#BACCFD] ">
      <div className="flex  items-center  h-[100%] ">
        <Avatar
          src="https://thumbs.dreamstime.com/b/group-people-diversity-diverse-business-man-woman-avatar-icons-group-people-diversity-diverse-business-man-woman-avatar-103432784.jpg"
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

export default groupsList;
