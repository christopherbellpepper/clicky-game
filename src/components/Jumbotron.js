import React from "react";
import "../App.css";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Clicky Game</h1>
        <p className="lead">
          Click an image to get a point, but don't click it twice, or you'll
          lose!!!
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
