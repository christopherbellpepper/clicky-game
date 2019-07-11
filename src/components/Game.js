import React from "react";
import images from "../images.json";
import "../App.css";

function Game() {
  return (
    <div className="container2">
      {images.map((image, index) => (
        <img src={image.imgUrl} />
      ))}
    </div>
  );
}

export default Game;
