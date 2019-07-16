import React from "react";

function NavBar(props) {
  return (
    <ul className="nav nav-pills nav-justified">
      <li className="nav-item">
        <a className="nav-link active" href="/">
          ReStart
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          Simpsons Memory Test
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          Score: {props.currentScore} | Top Score: {props.highestScore}
        </a>
      </li>
    </ul>
  );
}

export default NavBar;
