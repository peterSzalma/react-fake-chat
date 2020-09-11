import * as React from "react";
import { ChatMessageItem } from "./ChatMessageItem";

export function ChatDisplayBox(props: {
  messages: { message: string; sender: string; avatar: string }[];
}) {

  const messages: { message: string; sender: string; avatar: string }[] =
    props.messages;

  return (
    <div>
      {messages.map((message) => (
        <ChatMessageItem message={message} key={message.message} />
      ))}
    </div>
  );
}
