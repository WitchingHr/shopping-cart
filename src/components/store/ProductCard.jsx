import React from "react";
import './styles/ProductCard.css'

export default function ProductCard({ id, name, price }) {
  return (
    <div className="ProductCard">
      <div className="img">Image</div>
      <div className="product-name">{name}</div>
      <div className="button-wrapper">
        <span className="price">${price}</span>
        <button className="buy-button">Buy</button>
      </div>
    </div>
  );
}
