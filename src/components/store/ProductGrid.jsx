import React, { useContext, useEffect } from "react";
import { Context } from "../../RouteSwitch";
import ProductCard from "./ProductCard";
import './styles/ProductGrid.css';

export default function ProductGrid() {
  const {setProducts, filter, setFilter} = useContext(Context);

  useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data)
        setFilter(data)
      })
  }, []);

  return(
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