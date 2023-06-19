import React from "react";

import { Avatar } from "rsuite";

interface Props {
  id: number;
  name: string;
  message: string[];
  img: string;
}

function InMasseg(props: Props) {
  return (
    <div className="chat-message " key={props.id}>
      <div className="flex items-end tree-one">
        <div className="flex flex-col space-y-2 text- max-w-xs mx-2 order-2 items-start">
          {props.message.map((msge, index) => (
            <div className=" tree-two " key={index}>
              <span className=" msg  px-4 py-2 rounded-lg inline-block rounded-bl-none max-w-[300px] break-words text-lg  text-white">
                {msge}
              </span>
            </div>
          ))}
        </div>
        <Avatar src={props.img} size="lg" circle className="!bg-transparent" />
      </div>
    </div>
  );
}

export default InMasseg;
