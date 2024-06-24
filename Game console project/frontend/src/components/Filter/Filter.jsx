import React from "react";
import "./Filter.css";

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
            <a>All categories</a>
          </div>
          <div className="Nintendo">
            <input type="checkbox" name="checkbox" />
            <a>Nintendo</a>
          </div>
          <div className="Playstation">
            <input type="checkbox" name="checkbox" />
            <a>Playstation</a>
          </div>
          <div className="Xbox">
            <input type="checkbox" name="checkbox" />
            <a>Xbox</a>
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
              <a>In Stock</a>
            </div>
            <div className="Out-of-stock">
              <input type="checkbox" name="checkbox" />
              <a>Out of stock</a>
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
            <a>Smart watch</a>
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
            <a>Smart watch</a>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="color">
        <div className="head">
          <h1>Color</h1>
          <button>Reset</button>
        </div>
      </div>
      <div className="line"></div>
      <div className="size">
        <div className="head">
          <h1>Size</h1>
          <button>Reset</button>
        </div>
      </div>
      <div className="filter">
        <div className="M">
          <input type="checkbox" name="checkbox" />
          <a>M</a>
        </div>
        <div className="S">
          <input type="checkbox" name="checkbox" />
          <a>S</a>
        </div>
        <div className="X">
          <input type="checkbox" name="checkbox" />
          <a>X</a>
        </div>
        <div className="XX">
          <input type="checkbox" name="checkbox" />
          <a>XX</a>
        </div>
      </div>
    </div>
  );
}
