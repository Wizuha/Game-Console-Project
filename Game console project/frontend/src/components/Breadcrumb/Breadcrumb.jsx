import React from "react";
import "./Breadcrumb.css";

export default function Breadcrumb() {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb-content">
        <div className="breadcrumb-left">
          <p>Browse Categories</p>
        </div>
        <div className="breadcrumb-mid">
          <p>Home</p>
          <p>Catalog</p>
          <p>Blog</p>
          <p>Pages</p>
          <p>About us</p>
        </div>
      </div>
    </div>
  );
}
