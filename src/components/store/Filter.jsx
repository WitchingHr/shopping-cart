import React from "react";
import "./styles/Filter.css";

export default function Filter() {
  return (
    <div className="filter">

      <div className="categories">
        <div className="filter-title">Categories</div>
        <div className="checkbox-group">
          <div className="checkbox-item">
            <input type="checkbox" id="one" name="one" value="one" />
            <label htmlFor="one">One</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" id="two" name="two" value="two" />
            <label htmlFor="two">Two</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" id="three" name="three" value="three" />
            <label htmlFor="three">Three</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" id="four" name="four" value="four" />
            <label htmlFor="four">Four</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" id="five" name="five" value="five" />
            <label htmlFor="five">Five</label>
          </div>
        </div>
      </div>
    
      <div className="price-filter">
        <div className="filter-title">Price</div>
        <div className="price-wrapper">
          <input type="text" className="filter-input" placeholder="1" />
          -
          <input type="text" className="filter-input" placeholder="100" />
        </div>
      </div>

    </div>
  );
}