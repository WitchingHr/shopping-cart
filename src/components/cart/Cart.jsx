import React, { useContext, useState, useEffect, Fragment } from "react";
import Header from "../common/Header";
import { Context } from "../../RouteSwitch";
import './styles/Cart.css';
import CartItem from "./CartItem";
import CartModal from "../store/CartModal";

export default function Cart() {
  const {viewCart, cart, setCart} = useContext(Context);
  const [total, setTotal] = useState(cart.reduce((prev, curr) => prev + curr.price * curr.quantity, 0))

  useEffect(() => {
    const shipping = 10;
    const tax = 1.2;
    const productTotal = cart.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);
    const updatedTotal = (productTotal * tax) + shipping;
    setTotal(updatedTotal);
  }, [cart, setCart]);

  return (
    <div>
      <Header />
      <div className="cart-container">
        <ul className="cart-list">
          {cart.map(product =>
          <Fragment key={product.id}>
            <CartItem product={product} setTotal={setTotal} />
            <hr></hr>
          </Fragment>
          )}
          <div className="cart-checkout-wrapper">
            <a href="https://github.com/WitchingHr" className="checkout button">Proceed to Checkout</a>
            <span className="cart-total-breakdown">
              <div className="cart-ship-tax">Tax: ${(Math.round((total * 0.06) * 100) / 100).toFixed(2)}</div>
              <div className="cart-ship-tax">Shipping: $10.00</div>
              <div className="cart-total">Total: ${(Math.round(total * 100) / 100).toFixed(2)}</div>
            </span>
          </div>
        </ul>
      </div>
      {viewCart &&
        <CartModal />
      }
    </div>
  );
}