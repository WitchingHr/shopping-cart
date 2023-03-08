import React, { useContext, useEffect } from "react";
import { Context } from "../../RouteSwitch";
import ProductCard from "./ProductCard";
import './styles/ProductGrid.css';

export default function ProductGrid() {
  // Get context
  const {
    setProducts, filter, setFilter,
    deptFilter, setDeptFilter
  } = useContext(Context);

  // Fetch products, set product states
  useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data) // All products
        setDeptFilter(data) // For department filter
        setFilter(data) // For department + price filter
      })
  }, []);

  // Update filter when department filter changes
  useEffect(() => {
    setFilter(deptFilter)
  }, [deptFilter]);

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