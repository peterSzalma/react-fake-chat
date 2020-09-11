import * as React from "react";

const buttonStyle = {
  border: "none",
  backgroundColor: "transparent",
};

const inputStyle = {
  width: "86%",
  height: "96%",
  borderRadius: "20px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
  borderWidth: "0px",
};

const flexbox = {
  display: "flex",
};

export function MessageInput(props: any) {
  const [message, setMessage] = React.useState("");

  const onMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.currentTarget.value);
  };

  const sendMessage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    props.sendMessage(message);
  };

  return (
    <div style={flexbox}>
      <input
        style={inputStyle}
        type="text"
        value={message}
        onChange={onMessageChange}
      ></input>
      <button style={buttonStyle} onClick={sendMessage}>
        <svg height="36px" width="36px" viewBox="0 0 36 36">
          <g fill="none" fill-rule="evenodd">
            <g>
              <polygon points="0 36 36 36 36 0 0 0"></polygon>
              <path
                d="M31.1059281,19.4468693 L10.3449666,29.8224462 C8.94594087,30.5217547 7.49043432,29.0215929 8.17420251,27.6529892 C8.17420251,27.6529892 10.7473302,22.456697 11.4550902,21.0955966 C12.1628503,19.7344961 12.9730756,19.4988922 20.4970248,18.5264632 C20.7754304,18.4904474 21.0033531,18.2803547 21.0033531,17.9997309 C21.0033531,17.7196073 20.7754304,17.5095146 20.4970248,17.4734988 C12.9730756,16.5010698 12.1628503,16.2654659 11.4550902,14.9043654 C10.7473302,13.5437652 8.17420251,8.34697281 8.17420251,8.34697281 C7.49043432,6.9788693 8.94594087,5.47820732 10.3449666,6.1775158 L31.1059281,16.553593 C32.298024,17.1488555 32.298024,18.8511065 31.1059281,19.4468693"
                fill="#0084FF"
              ></path>
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
}
