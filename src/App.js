import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar.js";
import Jumbotron from "./components/Jumbotron.js";
import Game from "./components/Game.js";

class App extends React.Component {
  state = {
    highestScore: 0,
    currentScore: 0,
    clickedCards: []
  };

  keepScore = () => {
    this.setState({ currentScore: this.state.currentScore + 1 });
  };

  render() {
    return (
      <div className="App">
        <NavBar
          currentScore={this.state.currentScore}
          highestScore={this.state.highestScore}
        />
        <Jumbotron />
        <Game />
      </div>
    );
  }
}

export default App;
