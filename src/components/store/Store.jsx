import React from "react";
import Header from "../common/Header";
import ProductGrid from "./ProductGrid";
import Filter from "./Filter";
import './styles/Store.css'

export default function Store() {
  return (
    <div className="store-page">
      <Header />
      <div className="content-wrapper">
        <Filter />
        <ProductGrid />
      </div>
    </div>
  );
}