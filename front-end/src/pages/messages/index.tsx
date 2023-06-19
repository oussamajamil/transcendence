import React from "react";
import "./style.scss";

import ConversationComponent from "./convComponent";
import ChatComponent from "./chatComponent";

function MessagesPage() {
  return (
    <div className=" w-full h-[90vh]   ">
      <div className="game-container bg-[#FFFFFF] rounded-[50px] tect-[1.875rem]  flex items-center justify-center flex-col  h-[90%] w-full  gap-4 ">
        <div className="w-full h-[3rem]  box-border flex items-center justify-start ">
            <h1 className=" titel box-border h-[60px] ">Chat / Messages</h1>
        </div>
        <div className=" chat-container  flex items-center justify-center gap-[3rem] w-[95%] h-[90%] py-4   ">
          <ConversationComponent />
          <ChatComponent />
        </div>
      </div>
    </div>
  );
}

export default MessagesPage;
