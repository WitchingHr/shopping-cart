import React from "react";
import './styles/ProductCard.css'

export default function ProductCardLoading() {
  return (
    <div className="ProductCardLoading">
      <div className="loading-image"></div>
      <div className="loading-name"></div>
      <div className="loading-wrapper">
        <span className="loading-price"></span>
        <span className="loading-button"></span>
      </div>
    </div>
  );
}
