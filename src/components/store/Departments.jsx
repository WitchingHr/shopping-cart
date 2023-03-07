import React, { useContext } from "react";
import { Context } from "../../RouteSwitch";

export default function Departments(
  {
    activeMen, activeWomen, activeJewel, activeElec,
    setActiveMen, setActiveWomen, setActiveJewel, setActiveElec,
    states
  }
) {

  const {setFilter, products} = useContext(Context);

  // 

  function handleStates(department) {
    states.forEach(({ state, fn, category}) => {
      if (state) {
        fn(false);
      }
      if (category === department) {
        fn(true);
      }
    });
  }

  function handleClick(department) {
    const filtered = products.filter(product => {
      return product.category === department;
    });
    setFilter(filtered);
    handleStates(department);
  }

  return (
    <div className="department-list">
      <button
        className={"department " + (activeMen && "department-active")}
        onClick={() => handleClick("men's clothing")}>
        Men's Clothing
      </button>
      <button
        className={"department " + (activeWomen && "department-active")}
        onClick={() => handleClick("women's clothing")}>
        Women's Clothing
      </button>
      <button
        className={"department " + (activeJewel && "department-active")}
        onClick={() => handleClick("jewelery")}>
        Jewelery
      </button>
      <button
        className={"department " + (activeElec && "department-active")}
        onClick={() => handleClick("electronics")}>
        Electronics
      </button>
    </div>
  );
}
