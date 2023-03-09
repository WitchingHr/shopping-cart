import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../RouteSwitch";
import ProductCard from "./ProductCard";
import './styles/ProductGrid.css';

import ProductGridItems from "./ProductGridItems";
import WithLoading from "./WithLoading";
const ProductsWithLoading = WithLoading(ProductGridItems);

export default function ProductGrid({ department }) {
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
      setIsLoading(false);
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