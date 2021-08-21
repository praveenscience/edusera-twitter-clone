import React, { Component } from "react";
import Header from "./Bootstrap/Header";
import Compose from "./Compose";
import Login from "./Login";
import MessagesList from "./Messages";

class App extends Component {
  state = {
    DarkMode: true,
    LoggedIn: false,
    Name: "",
    Image: "",
    Messages: [
      {
        Name: "GitTweet",
        Image: "https://i.imgur.com/XWVoP5E.png",
        Text: "Hey All! Welcome to the DevChat. Let's start chatting!"
      }
    ]
  };
  handleSignIn = (Name, Image) => {
    this.setState({
      Name,
      Image,
      LoggedIn: true
    });
  };
  handleMessage = Text => {
    const { Name, Image } = this.state;
    this.setState({
      Messages: [...this.state.Messages, { Name, Image, Text }]
    });
  };
  render() {
    const { DarkMode, Name, Image, Messages, LoggedIn } = this.state;
    return (
      <div className="App">
        <Header dark={DarkMode} containerClassName="justify-content-center">
          GitTweet
        </Header>
        <div className="container">
          <div className="col-12 col-md-6 offset-md-3">
            <MessagesList Messages={Messages} Name={Name} />
            {LoggedIn && Name.trim().length > 0 && Image.trim().length > 0 ? (
              <Compose sendMessage={this.handleMessage} />
            ) : (
              <Login handleSignIn={this.handleSignIn} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
