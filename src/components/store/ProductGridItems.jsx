import React from "react";
import ProductCard from "./ProductCard";
import './styles/ProductGrid.css';

export default function ProductGridItems(props) {
  const {filter} = props;
  if (!filter) return null;
  if (!filter.length) return <p>No products, sorry</p>

  return (
    <div className="ProductGrid">
      {filter.map((product) =>
        <ProductCard
          key={product.id}
          id={product.id}
          product={product}
          name={product.title}
          price={product.price}
        />
      )}
    </div>
  );
}
