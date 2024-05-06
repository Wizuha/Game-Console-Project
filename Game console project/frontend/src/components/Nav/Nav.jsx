import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="content">
        <div className="left">
          <img src="Union.svg" />
          <p>Game Center</p>
        </div>
        <div className="input-button">
          <input type="text" name="search" placeholder="Search console" />
          <button>Search</button>
        </div>
        <div className="right">
          <div className="cart">
            <img src="shopping-cart.svg" />
            <p>Cart</p>
          </div>
          <div className="like">
            <img src="heart.svg" />
            <p>Like</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
