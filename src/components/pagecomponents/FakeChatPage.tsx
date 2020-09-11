import * as React from "react";
import { useState } from "react";
import { Layout } from "../common/Layout";
import { Page } from "../common/Page";
import { Slot } from "../common/Slot";
import { ChatDisplayBox } from "./ChatDisplayBox";
import { MessageInput } from "./MessageInput";

export function FakeChatPage() {
  const initialMessages = [
    {
      sender: "Joe",
      message: "hey",
      avatar:
        "https://images.unsplash.com/photo-1595290564159-273a22277a9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    },
    {
      sender: "Marie",
      message: "hi",
      avatar:
        "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    },
    {
      sender: "Marie",
      message: "how is your day?",
      avatar:
        "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    },
    {
      sender: "Joe",
      message: "its nice i might go to the beach. wyd?",
      avatar:
        "https://images.unsplash.com/photo-1595290564159-273a22277a9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const [messages, setMessages] = useState(initialMessages);

  const sendMessageFromMarie = (message: string
  ) => {
    console.log("in main component i got this input message from Marie:");
    console.log(message);
  };

  const sendMessageFromJoe = (message: string
    ) => {
      console.log("in main component i got this input message from Joe:");
      console.log(message);
    };

  return (
    <Page>
      <Layout columns="8" rows="20">
        <Slot column={[2, 6]} row={[2, 16]}>
          <ChatDisplayBox messages={messages}></ChatDisplayBox>
        </Slot>
        <Slot column={[2, 3]} row={[18, 2]}>
          <MessageInput sendMessage={sendMessageFromMarie}></MessageInput>
        </Slot>
        <Slot column={[5, 3]} row={[18, 2]}>
          <MessageInput sendMessage={sendMessageFromJoe}></MessageInput>
        </Slot>
      </Layout>
    </Page>
  );
}
