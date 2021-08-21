import React, { useState } from "react";
import FormGroup from "./Bootstrap/FormGroup";

const Login = ({ handleSignIn }) => {
  const [Name, setName] = useState("");
  const [Image, setImage] = useState("");
  const FormValues = { Name, Image };
  const SetValues = { setName, setImage };
  const handleSubmit = e => {
    e.preventDefault();
    handleSignIn(Name, Image);
  };
  return (
    <div className="Login">
      <p>Please enter your Name and Image URL to continue.</p>
      <form className="row g-3" onSubmit={handleSubmit}>
        {[
          {
            Label: "Your Name",
            Id: "Name"
          },
          {
            Label: "Your Image URL",
            Id: "Image"
          }
        ].map(fg => (
          <FormGroup
            className="col-auto"
            key={fg.Id}
            {...fg}
            Value={FormValues[fg.Id]}
            onChange={e => SetValues["set" + fg.Id](e.target.value)}
          />
        ))}
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Start Tweeting
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
