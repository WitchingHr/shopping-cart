import React, { useContext } from "react";
import { Context } from "../../RouteSwitch";
import "./styles/Filter.css";

export default function Filter() {
  const {setFilter, products} = useContext(Context);

  function filterByPrice(min, max) {
    const filtered = products.filter(product => {
      return product.price >= min && product.price <= max;
    });
    setFilter(filtered);
  }

  function handleClearFilter() {
    setFilter(products);
  }

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
      </div>

      <button
        className="clear-filters"
        onClick={handleClearFilter}
      >Clear Filters</button>

    </div>
  );
}