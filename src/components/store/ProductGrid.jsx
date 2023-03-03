import React from "react";
import ProductCard from "./ProductCard";
import './styles/ProductGrid.css';

const items = [
  {id: 1, name: 'item1', price: 5},
  {id: 2, name: 'item2', price: 10},
  {id: 3, name: 'item3', price: 50},
  {id: 4, name: 'item4', price: 25},
  {id: 5, name: 'item5', price: 15},
  {id: 6, name: 'item1', price: 5},
  {id: 7, name: 'item2', price: 10},
  {id: 8, name: 'item3', price: 50},
  {id: 9, name: 'item4', price: 25},
  {id: 10, name: 'item5', price: 15},
  {id: 11, name: 'item1', price: 5},
  {id: 12, name: 'item2', price: 10},
  {id: 13, name: 'item3', price: 50},
  {id: 14, name: 'item4', price: 25},
  {id: 15, name: 'item5', price: 15},
];

export default function ProductGrid() {
  return(
    <div className="ProductGrid">
      {items.map((product) =>
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
        />
      )}
    </div>
  );
}