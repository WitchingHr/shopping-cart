import React, { useContext, useState } from "react";
import { Context } from "../../RouteSwitch";
import "./styles/Filter.css";
import Departments from "./Departments";
import RangeSlider from "./RangeSlider";

export default function Filter() {
  const {filter, setFilter, products} = useContext(Context);

  // States for handling selected department
  const [activeMen, setActiveMen] = useState(false);
  const [activeWomen, setActiveWomen] = useState(false);
  const [activeJewel, setActiveJewel] = useState(false);
  const [activeElec, setActiveElec] = useState(false);

  const states = [
    {state: activeMen, fn: setActiveMen, category: "men's clothing"},
    {state: activeWomen, fn: setActiveWomen, category: "women's clothing"},
    {state: activeJewel, fn: setActiveJewel, category: "jewelery"},
    {state: activeElec, fn: setActiveElec, category: "electronics"}
  ];

  function clearActive() {
    states.forEach(({ state, fn }) => {
      if (state) {
        fn(false);
      }
    });
  }

  const [value, setValue] = useState([1, 1000]);

  function handleClearFilter() {
    setFilter(products);
    clearActive();
    setValue([0, 1000]);
  }

  return (
    <div className="filter">

      <div className="categories">
        <div className="filter-title">Department</div>
        <Departments
          activeMen={activeMen}
          activeWomen={activeWomen}
          activeJewel={activeJewel}
          activeElec={activeElec}
          setActiveMen={setActiveMen}
          setActiveWomen={setActiveWomen}
          setActiveJewel={setActiveJewel}
          setActiveElec={setActiveElec}
          states={states}
        />
      </div>
    
      <div className="price-filter">
        <div className="filter-title">Price</div>
        <div className="range-container">
          <RangeSlider
            setFilter={setFilter} 
            filter={filter}
            value={value}
            setValue={setValue}
          />
        </div>
      </div>

      <button
        className="clear-filters"
        onClick={handleClearFilter}
      >Clear Filters</button>

    </div>
  );
}