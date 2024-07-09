import React, { useState } from "react";
import { useMyContext } from "../../context/searchContext";
import "./Nav.css";

export default function Nav() {
  const [view, setView] = useState(false);
  const { filterData, search, setSearch } = useMyContext();

  return (
    <nav className="nav">
      <div className="content">
        <div className="left">
          <img src="/Union.svg" />
          <p>Game Center</p>
        </div>
        <div className="input-button">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            name="search"
            placeholder="Search console"
          />
          <button for="submit">Search</button>
        </div>
        <div className="right">
          <div className="cart">
            <img src="/shopping-cart.svg" />
            <span>9</span>
            <p>Cart</p>
          </div>
          <div className="like">
            <img src="/heart.svg" />
            <p>Like</p>
          </div>
        </div>
        <div className="navbar-mobile">
          <div className="line1"></div>
          <div className="line2"></div>
        </div>
      </div>
    </nav>
  );
}
