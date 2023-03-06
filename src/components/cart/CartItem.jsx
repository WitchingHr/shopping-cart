import React, { useContext, useState } from "react";
import './styles/Cart.css';
import { Context } from "../../RouteSwitch";

export default function CartItem({ product }) {
  const [quantity, setQuantity] = useState(1);
  const {cart, setCart} = useContext(Context);

  function handleDecrQuantity() {
    if (quantity !== 1) {
      setQuantity(q => q - 1);

      const next = cart.map(item => {
        if (item === product) {
          return {
            ...item,
            quantity: quantity - 1
          }
        } else {
          return item
        }
      });

      setCart(next);
    }
  }

  function handleIncrQuantity() {
    setQuantity(q => q + 1);

    const next = cart.map(item => {
      if (item === product) {
        return {
          ...item,
          quantity: quantity + 1
        }
      } else {
        return item
      }
    });

    setCart(next);
  }

  function handleDelete() {
    const next = cart.filter(item => item.id !== product.id);
    setCart(next);
  }

  return (
    <li key={product.id} className="cart-item">
      <img src={product.image} alt="product" className="cart-image" />
      <div className="cart-info-wrapper">
        <div className="cart-name-delete-wrapper">
          <span className="cart-name">{product.title}</span>
          <button title="Remove item" className="cart-delete" onClick={handleDelete}>✕</button>
        </div>
        <div className="cart-price-wrapper">
          <span className="cart-quantity-wrapper">
            <button
              className="cart-quantity-button"
              title="Decrease item quantity"
              onClick={handleDecrQuantity}
            >−</button>
            <span className="cart-quantity-label-wrapper">
              <span className="cart-quantity-label">Quantity: </span>
              <span className="cart-quantity">{product.quantity}</span>
            </span>
            <button
              className="cart-quantity-button"
              title="Increase item quantity"
              onClick={handleIncrQuantity}
            >＋</button>
          </span>
          <span className="cart-price">${(Math.round(product.price * 100 * product.quantity) / 100).toFixed(2)}</span>
        </div>
      </div>
    </li>
  );
}