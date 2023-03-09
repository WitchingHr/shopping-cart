import React, { useContext } from "react";
import Header from "../common/Header";
import CartModal from "./CartModal";
import { Context } from "../../RouteSwitch";
import { useLocation } from "react-router-dom";
import './styles/Item.css';

export default function Item() {
  const location = useLocation();
  const {product} = location.state;
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
    <div className="store-page">
        <Header />
        <div className="item-wrapper">
          <img
            src={product.image} alt=""
            className="item-image"
          />
          <div className="item-info">
            <div className="item-name">{product.title}</div>
            <div className="item-desc">{product.description}</div>
            <div className="item-price-button-wrapper">
              <div className="item-price">${(Math.round(product.price * 100) / 100).toFixed(2)}</div>
              {cart.some(item => item.id === product.id) ? (
                <button
                  className="item-incart button"
                  disabled
                >In cart</button>
              ) : (
                <button className="button item-button"
                  onClick={() => handleClick(product)}
                >Add to bag</button>
              )}
            </div>
          </div>
        </div>
        {viewCart &&
          <CartModal />
        }
    </div>
  );
}