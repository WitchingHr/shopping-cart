import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

export default function Header() {
  return (
      <div className="Header">
        <div className="links">
          <Link to="/" className="link">Home</Link>
          <Link to="/store" className="link">Store</Link>
        </div>
        <button className="cart-button">Cart</button>
      </div>
  );
}
