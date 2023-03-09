import React from "react";
import './styles/ProductGrid.css';
import ProductCardLoading from "./ProductCardLoading";

export default function WithLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props}) {
    if (!isLoading) return <Component {...props} />;

    const loadingItems = [
      {id: 0},
      {id: 1},
      {id: 2},
      {id: 3}
    ];

    return (
      <div className="ProductGrid">
        {loadingItems.map((product) =>
          <ProductCardLoading
            key={product.id}
          />
        )}
      </div>
    );
  }
}