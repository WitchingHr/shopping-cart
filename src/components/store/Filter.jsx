import React, { useContext, useState } from "react";
import { Context } from "../../RouteSwitch";
import "./styles/Filter.css";
import Departments from "./Departments";
import RangeSlider from "./RangeSlider";

export default function Filter({ department }) {
  // Get context
  const {
    setFilter, products,
    deptFilter, setDeptFilter
  } = useContext(Context);

  // States for handling department filter
  const [activeMen, setActiveMen] = useState(false);
  const [activeWomen, setActiveWomen] = useState(false);
  const [activeJewel, setActiveJewel] = useState(false);
  const [activeElec, setActiveElec] = useState(false);

  // State array for iteration
  const states = [
    {state: activeMen, fn: setActiveMen, category: "men's clothing"},
    {state: activeWomen, fn: setActiveWomen, category: "women's clothing"},
    {state: activeJewel, fn: setActiveJewel, category: "jewelery"},
    {state: activeElec, fn: setActiveElec, category: "electronics"}
  ];

  // Clear the bold weight on selected department font
  function clearActive() {
    states.forEach(({ state, fn }) => {
      if (state) {
        fn(false);
      }
    });
  }

  // Slider values
  const [value, setValue] = useState([1, 1000]);

  // Clear filter, reset slider values
  function handleClearFilter() {
    setDeptFilter(products);
    clearActive();
    setValue([1, 1000]);
  }

  return (
    <div className="filter">

      {!department && (
        <div className="categories">
          <div className="filter-title">Department</div>
          <Departments
            activeMen={activeMen}
            activeWomen={activeWomen}
            activeJewel={activeJewel}
            activeElec={activeElec}
            states={states}
          />
        </div>
      )}
    
      <div className="price-filter">
        <div className="filter-title">Price</div>
        <div className="range-container">
          <RangeSlider
            setFilter={setFilter} 
            deptFilter={deptFilter}
            value={value}
            setValue={setValue}
          />
        </div>
      </div>

      <button
        className="clear-filters"
        onClick={handleClearFilter}
      >
        Clear Filters
      </button>

    </div>
  );
}