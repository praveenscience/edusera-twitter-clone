import React, { useState } from "react";

const Compose = () => {
  const [Message, setMessage] = useState("");
  return (
    <div className="Compose d-flex flex-row">
      <textarea
        className="flex-grow-1 compose-text"
        placeholder="Start typing your message..."
        value={Message}
        onChange={e => setMessage(e.target.value)}
      />
      <div className="action-buttons">
        <button
          className="d-block form-control btn btn-primary btn-sm mb-1"
          disabled={Message.trim().length < 4}
        >
          Send
        </button>
        <button className="d-block form-control btn btn-danger btn-sm">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Compose;
