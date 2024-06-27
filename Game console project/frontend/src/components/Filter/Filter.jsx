import React from "react";
import "./Filter.css";

export default function Filter() {
  return (
    <div className="filter-content">
      <div className="categorie">
        <div className="head">
          <h1>Categories</h1>
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
      <div className="availabality">
        <div className="availabality">
          <div className="head">
            <h1>Availabality</h1>
            <button>Reset</button>
          </div>
          <div className="filter">
            <div className="In-stock">
              <input type="checkbox" name="checkbox" />
              <p>In Stock</p>
            </div>
            <div className="Out-of-stock">
              <input type="checkbox" name="checkbox" />
              <p>Out of stock</p>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="product-type">
        <div className="head">
          <h1>Product type</h1>
          <button>Reset</button>
        </div>
        <div className="filter">
          <div className="smart-watch">
            <input type="checkbox" name="checkbox" />
            <p>Smart watch</p>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="brand">
        <div className="head">
          <h1>Brand</h1>
          <button>Reset</button>
        </div>
        <div className="filter">
          <div className="smart-watch">
            <input type="checkbox" name="checkbox" />
            <p>Smart watch</p>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="size">
        <div className="head">
          <h1>Size</h1>
          <button>Reset</button>
        </div>
        <div className="filter">
          <div className="M">
            <input type="checkbox" name="checkbox" />
            <p>M</p>
          </div>
          <div className="S">
            <input type="checkbox" name="checkbox" />
            <p>S</p>
          </div>
          <div className="X">
            <input type="checkbox" name="checkbox" />
            <p>X</p>
          </div>
          <div className="XX">
            <input type="checkbox" name="checkbox" />
            <p>XX</p>
          </div>
        </div>
      </div>
    </div>
  );
}
