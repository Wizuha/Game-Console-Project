import React from "react";
import "./Breadcrumb.css";
import { Link } from "react-router-dom";

export default function Breadcrumb() {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb-content">
        <div className="breadcrumb-left">
          <p>Browse Categories</p>
        </div>
        <div className="breadcrumb-mid">
          <Link to={`/`}>
            <button>Home</button>
          </Link>
          <p>Catalogue</p>
          <p>Blog</p>
          <p>Pages</p>
          <p>About us</p>
        </div>
      </div>
    </div>
  );
}
