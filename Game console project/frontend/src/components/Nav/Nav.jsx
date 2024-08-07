import React, { useState } from "react";
import { useMyContext } from "../../context/searchContext";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const [view, setView] = useState(false);
  const { filterData, search, setSearch, nbLikes, nbPurchases } =
    useMyContext();

  return (
    <nav className="nav">
      <div className="content">
        <div className="left">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <button>
              <img src="/Union.svg" />
              <p>Game Center</p>
            </button>
          </Link>
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
            <div className="liste">
              <Link
                to={`/achats`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <button>
                  <img src="/shopping-cart.svg" />
                  <span>{nbPurchases}</span>
                </button>
              </Link>
            </div>
            <p>Cart</p>
          </div>
          <div className="like">
            <div className="liste">
              <button>
                <img src="/heart.svg" />
                <span>0</span>
              </button>
            </div>
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
