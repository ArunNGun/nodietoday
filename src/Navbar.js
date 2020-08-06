import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <span id="L">100</span>
        <span id="T">Reasons</span>
        <span id="G">To</span>
        <span id="H">Stay</span>
        <span id="I">Alive</span>
      </div>

      <a className="active" href="https://www.instagram.com/arun_irl/">
        <img
          src="https://img.icons8.com/cute-clipart/64/000000/instagram-new.png"
          alt="insta"
        />
      </a>
    </div>
  );
}

export default Navbar;
