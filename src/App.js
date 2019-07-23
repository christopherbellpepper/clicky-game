import React from "react";
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

  keepScore = (event, image) => {
    if (this.state.clickedCards.includes(image.id)) {
      alert("Game Over");
      this.setState({
        currentScore: 0,
        clickedCards: []
      });
    } else {
      let highestScore = 0;
      if (this.state.highestScore > this.state.currentScore + 1) {
        highestScore = this.state.highestScore;
      } else {
        highestScore = this.state.currentScore + 1;
      }

      this.setState({
        highestScore: highestScore,
        currentScore: this.state.currentScore + 1,
        clickedCards: [...this.state.clickedCards, image.id]
      });
    }
  };

  render() {
    return (
      <div className="App">
        <NavBar
          currentScore={this.state.currentScore}
          highestScore={this.state.highestScore}
        />
        <Jumbotron />
        <Game keepScore={this.keepScore} />
      </div>
    );
  }
}

export default App;
