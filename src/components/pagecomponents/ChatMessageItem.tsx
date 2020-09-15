import * as React from "react";

const imageStyles = {
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
  height: "60px",
  width: "60px",
  borderRadius: "10px",
  margin: "0 15px"
};

const chatItem = {
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
  width: "30%",
  backgroundColor: "#04BF9D",
  margin: "30px 5px",
  borderRadius: "20px",
  padding: "15px",
};

const displayOnTheLeft = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
};

const displayOnTheRight = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
};

export function ChatMessageItem(props: any) {
  const message = props.message;

  return (
    <div
      style={message.sender === "Joe" ? displayOnTheLeft : displayOnTheRight}
    >
      {message.sender === "Joe" && (
        <img src={message.avatar} style={imageStyles} alt="profile"></img>
      )}
      <div style={chatItem}>
        <p>{message.message}</p>
      </div>
      {message.sender === "Marie" && (
        <img src={message.avatar} style={imageStyles} alt="profile"></img>
      )}
    </div>
  );
}

