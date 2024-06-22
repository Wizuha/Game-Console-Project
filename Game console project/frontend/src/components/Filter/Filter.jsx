import React from 'react'
import './Filter.css'

export default function Filter() {
  return (
    <div className="filter-content">
      <div className="categorie">
        <div className="head">
          <h1>Categorie</h1>
          <button>Reset</button>
        </div>
        <div className="filter">
          <div className="all-categories">
            <input type="checkbox" name="checkbox" />
            <p>All categories</p>
          </div>
          <div className="Nintendo">
            <input type="checkbox" name="checkbox" />
            <p>Nintendo</p>
          </div>
          <div className="Playstation">
            <input type="checkbox" name="checkbox" />
            <p>Playstation</p>
          </div>
          <div className="Xbox">
            <input type="checkbox" name="checkbox" />
            <p>Xbox</p>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="availabality"></div>
      <div className="line"></div>
      <div className="product-type"></div>
      <div className="line"></div>
      <div className="brand"></div>
      <div className="color"></div>
      <div className="line"></div>
      <div className="size"></div>
    </div>
  );
}
