import React, { useContext } from "react";
import { Context } from "../../RouteSwitch";
import './styles/ProductCard.css'

export default function ProductCard({ id, name, price, product }) {
  const {viewCart, setViewCart, cart, setCart} = useContext(Context);

  function handleClick(product) {
    handleAddToCart(product);
    openCart();
  }

  function openCart() {
    if (!viewCart) {
      setViewCart(!viewCart);
    }
  }

  function handleAddToCart(product) {
    setCart([
      ...cart,
      {
        id: product.id,
        image: product.image,
        title: product.title,
        price: product.price,
        quantity: 1
      }
    ]);
  }

  return (
    <div className="ProductCard">
      <img src={product.image} alt="product" className="product-image" />
      <div className="product-name">{name}</div>
      <div className="button-wrapper">
        <span className="price">${(Math.round(price * 100) / 100).toFixed(2)}</span>
        {cart.some(product => product.id === id) ? (
          <button
            className="incart button"
            disabled
          >In cart</button>
        ) : (
          <button
            className="buy button"
            onClick={() => handleClick(product)}
          >Buy</button>
        )}
      </div>
    </div>
  );
}
