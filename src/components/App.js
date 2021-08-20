import React, { Component } from "react";
import Header from "./Bootstrap/Header";

class App extends Component {
  state = {
    DarkMode: true,
    Name: "",
    Image: ""
  };
  render() {
    const { DarkMode, Name, Image } = this.state;
    return (
      <div className="App">
        <Header dark={DarkMode} containerClassName="justify-content-center">
          GitTweet
        </Header>
        <div className="container">
          <div className="col-12 col-md-6 offset-md-3">
            {Name.trim().length > 0 && Image.trim().length > 0
              ? "Show Compose"
              : "Ask for Name & Image."}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
