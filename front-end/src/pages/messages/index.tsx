import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getConversation } from "../../api/users";
import "./style.scss";

import ConversationComponent from "./convComponent";
import ChatComponent from "./chatComponent";

function MessagesPage() {

  const con = useQuery({
    queryKey: ["conv"],
    queryFn: async () =>
      await (
        getConversation("0c5ec8b2-9fed-4652-863c-a7bd61ed7455")
      ),
  });

console.log(con.data)

  return (
    <div className=" w-full h-[90vh]   ">
      <div className="game-container  rounded-[50px] tect-[1.875rem]  flex items-center justify-center flex-col  h-[90%] w-full  gap-4 ">
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
