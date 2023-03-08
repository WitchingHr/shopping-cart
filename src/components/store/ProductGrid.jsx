import React, { useContext, useEffect } from "react";
import { Context } from "../../RouteSwitch";
import ProductCard from "./ProductCard";
import './styles/ProductGrid.css';

export default function ProductGrid({ department }) {
  // Get context
  const {
    setProducts, filter, setFilter,
    deptFilter, setDeptFilter, products
  } = useContext(Context);

  // Fetch products, set product states
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      setProducts(data) // All products
      // setDeptFilter(data) // For department filter
      // setFilter(data) // For department + price filter
      function filter(category) {
        const filtered = data.filter(product => product.category === category);
        setDeptFilter(filtered);
      }
      if (department === "mens") {
        filter("men's clothing");
      } else if (department === "womens") {
        filter("women's clothing");
      } else if (department === "jewelery") {
        filter("jewelery");
      } else if (department === "electronics") {
        filter("electronics");
      }
    })
  }, []);

  if (department === "store") {
    setDeptFilter(products);
  }

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