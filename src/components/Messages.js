import React from "react";

const MessagesList = ({ Messages }) => {
  return (
    <ul className="Messages">
      {Messages.map((msg, key) => (
        <li key={key}>
          <div className="avatar">
            <img src={msg.Image} alt={msg.Name} />
          </div>
          <div className="Meta">
            <strong>{msg.Name}</strong>
            <p>{msg.Text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MessagesList;
