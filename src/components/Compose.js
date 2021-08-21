import React, { useState } from "react";

const Compose = ({ sendMessage }) => {
  const [Message, setMessage] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    sendMessage(Message);
    setMessage("");
  };
  return (
    <form className="Compose d-flex flex-row" onSubmit={handleSubmit}>
      <textarea
        className="flex-grow-1 compose-text"
        placeholder="Start typing your message..."
        value={Message}
        onKeyDown={e => {
          const evt = e || window.event;
          console.log(evt.keyCode);
          if (evt.keyCode === 13) {
            evt.preventDefault();
            if (Message.trim().length > 3) {
              handleSubmit(e);
            }
          }
        }}
        onChange={e => setMessage(e.target.value)}
      />
      <div className="action-buttons">
        <button
          type="submit"
          className="d-block form-control btn btn-primary btn-sm mb-1"
          disabled={Message.trim().length < 4}
        >
          Send
        </button>
        <button
          type="button"
          className="d-block form-control btn btn-danger btn-sm"
        >
          Log Out
        </button>
      </div>
    </form>
  );
};

export default Compose;
