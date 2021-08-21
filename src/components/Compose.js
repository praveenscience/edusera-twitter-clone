import React from "react";

const Compose = () => {
  return (
    <div className="Compose d-flex flex-row">
      <textarea
        className="flex-grow-1 compose-text"
        placeholder="Start typing your message..."
      />
      <div className="action-buttons">
        <button className="d-block form-control btn btn-primary btn-sm mb-1">
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
