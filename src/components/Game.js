import React from "react";
import images from "../images.json";
import "../App.css";

function Game(props) {
  return (
    <div className="container2">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.imgUrl}
          onClick={event => props.keepScore(event, image)}
        />
      ))}
    </div>
  );
}

export default Game;
