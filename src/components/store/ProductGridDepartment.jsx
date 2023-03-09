import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../RouteSwitch";
import './styles/ProductGrid.css';

import ProductGridItems from "./ProductGridItems";
import WithLoading from "./WithLoading";
const ProductsWithLoading = WithLoading(ProductGridItems);

export default function ProductGridDepartment({ department }) {
  // Get context
  const {
    setProducts, filter, setFilter,
    deptFilter, setDeptFilter
  } = useContext(Context);

  const [isLoading, setIsLoading] = useState(true);

  // Fetch products, set product states
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      setProducts(data) // All products
      setDeptFilter(data) // For department filter
      function filter(category) {
        const filtered = data.filter(product => product.category === category);
        setDeptFilter(filtered);
        setIsLoading(false);
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

  // Update filter when department filter changes
  useEffect(() => {
    setFilter(deptFilter)
  }, [deptFilter]);

  return (
    <ProductsWithLoading 
      isLoading={isLoading}
      filter={filter}
    />
  );
}