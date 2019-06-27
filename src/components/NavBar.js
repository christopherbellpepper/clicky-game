import React from "react";

function NavBar() {
  return (
    <ul className="nav nav-pills nav-justified">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          Clicky Game
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Click an Image to score some points
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          score
        </a>
      </li>
    </ul>
  );
}

export default NavBar;
