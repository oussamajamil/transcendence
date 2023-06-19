import React from "react";

import "./inMasseg.scss";
import { Avatar } from "rsuite";


interface Props {
    id: number;
    name: string;
    message: string[];
    img: string;
}

function OutMasseg(props: Props) {


    return (
        <div className="chat-message ">
                    <div className="flex items-end justify-end tree-one">
                      <div className="flex flex-col space-y-2 text-lg max-w-xs mx-2 order-1 items-end tree-two">
                        {props.message.map((msg, index) => (
                          <div key={"message" + index} className="">
                            <span className=" px-4 py-2 rounded-lg inline-block rounded-bl-none max-w-[300px] break-words text-lg text-white msg1 ">
                              {msg}
                            </span>
                          </div>
                        ))}
                      </div>
                      <Avatar
                        src={props.img}
                        size="lg"
                        circle
                        className=" !bg-transparent order-2  "
                      />
                    </div>
                  </div>
    );

}

export default OutMasseg;