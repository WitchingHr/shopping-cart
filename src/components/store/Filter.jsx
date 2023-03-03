import React from "react";
import "./styles/Filter.css";

export default function Filter() {
  return (
    <div className="filter">

      <div className="categories">
        <div className="filter-title">Categories</div>
        <div>
          <input type="checkbox" id="one" name="one" value="one" />
          <label for="one">One</label>
        </div>
        <div>
          <input type="checkbox" id="two" name="two" value="two" />
          <label for="two">Two</label>
        </div>
        <div>
          <input type="checkbox" id="three" name="three" value="three" />
          <label for="three">Three</label>
        </div>
        <div>
          <input type="checkbox" id="four" name="four" value="four" />
          <label for="four">Four</label>
        </div>
        <div>
          <input type="checkbox" id="five" name="five" value="five" />
          <label for="five">Five</label>
        </div>
      </div>
    
      <div className="price-filter">
        <div>Price</div>
        <div className="price-wrapper">
          <input type="text" className="filter-input" />
          -
          <input type="text" className="filter-input" />
        </div>
      </div>

    </div>
  );
}