import React, { useContext } from "react";
import { Context } from "../../RouteSwitch";
import { Link } from "react-router-dom";
import './styles/ProductCard.css'

export default function ProductCard({ id, name, price, product }) {
  const {viewCart, setViewCart, cart, setCart} = useContext(Context);

  // Event handler
  function handleClick(product) {
    handleAddToCart(product);
    openCart();
  }

  // Open cart modal
  function openCart() {
    if (!viewCart) {
      setViewCart(!viewCart);
    }
  }

  // Add product to cart
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
      <Link
        to={`/store/${product.id}`}
        state={{product: product}}
        className="product-name-link">
        <div className="product-name">{name}</div>
      </Link>
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
