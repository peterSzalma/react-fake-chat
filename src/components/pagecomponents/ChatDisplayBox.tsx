import * as React from "react";
import { ChatMessageItem } from "./ChatMessageItem";

export function ChatDisplayBox(props: {
  messages: { message: string; sender: string; avatar: string }[];
}) {
  console.log(props.messages)
  const messages: { message: string; sender: string; avatar: string }[] =
    props.messages;
  return (
    <div style={{overflowY: "auto"}}>
      {messages.map((message) => (
        <ChatMessageItem message={message} key={message.message} />
      ))}
    </div>
  );
}
