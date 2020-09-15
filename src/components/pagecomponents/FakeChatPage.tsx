import * as React from "react";
import { Layout } from "../common/Layout";
import { Page } from "../common/Page";
import { Slot } from "../common/Slot";
import { ChatDisplayBox } from "./ChatDisplayBox";
import { MessageInput } from "./MessageInput";

interface IMessages {
  sender: string,
  avatar: string, 
  message: string
}

export function FakeChatPage() {
  let initialMessages: IMessages[] = [];

  const [messages, setMessages] = React.useState(initialMessages);
  
  const sendMessageFromMarie = (message: string
  ) => {
    const text = {
      sender: "Marie",
      message: message,
      avatar: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
    }
    initialMessages = [...messages];
    initialMessages.push(text)
    setMessages(initialMessages)
  };
  
  const sendMessageFromJoe = (message: string
    ) => {
      const text = {
        sender: "Joe",
        message: message,
        avatar: "https://images.unsplash.com/photo-1595290564159-273a22277a9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
      }
      initialMessages = [...messages]
      initialMessages.push(text)
      setMessages(initialMessages)
    };


  return (
    <Page>
      <Layout columns="8" rows="20">
        <Slot column={[2, 6]} row={[2, 16]}>
            <ChatDisplayBox messages={messages}/>
        </Slot>
        <Slot column={[2, 3]} row={[18, 2]} color="transparent">
          <MessageInput sendMessage={sendMessageFromJoe}></MessageInput>
        </Slot>
        <Slot column={[5, 3]} row={[18, 2]} color="transparent">
          <MessageInput sendMessage={sendMessageFromMarie}></MessageInput>
        </Slot>
      </Layout>
    </Page>
  );
}
