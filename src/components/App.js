import React, { Component } from "react";
import Header from "./Bootstrap/Header";

class App extends Component {
  state = {
    DarkMode: true
  };
  render() {
    return (
      <div className="App">
        <Header dark={this.state.DarkMode}>GitTweet</Header>
      </div>
    );
  }
}

export default App;
