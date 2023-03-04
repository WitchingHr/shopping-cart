import React, { useContext } from "react";
import { Context } from "../../RouteSwitch";
import { Link } from "react-router-dom";
import "./styles/Header.css"

export default function Header() {
  const {viewCart, setViewCart} = useContext(Context);
  
  function handleToggleCart() {
    setViewCart(!viewCart);
  }

  return (
      <div className="Header">
        <div className="links">
          <Link to="/" className="link">Home</Link>
          <Link to="/store" className="link">Store</Link>
        </div>
        <button
          className="cart-button"
          onClick={handleToggleCart}
        >Cart</button>
      </div>
  );
}
