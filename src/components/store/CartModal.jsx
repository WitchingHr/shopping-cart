import React, { useRef, useEffect, useContext } from "react";
import { Context } from "../../RouteSwitch";
import { Link } from "react-router-dom";
import './styles/CartModal.css';

export default function CartModal() {
  const {viewCart, setViewCart} = useContext(Context);

  // Close modal if clicking outside component
  const cart = useRef(null);
  function useOutsideClick(ref) {
    useEffect(() => {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          setViewCart(!viewCart);
        }
      }
      document.addEventListener('mousedown', handleClick);
      return () => {
        document.removeEventListener('mousedown', handleClick);
      }
    }, [ref]);
  }
  useOutsideClick(cart);

  function handleCheckout() {
    setViewCart(!viewCart);
  }

  return (
    <div
      className="CartModal"
      ref={cart}
    >
      This is my Cart
      <Link to="/cart">
        <button
          className="buy-button"
          onClick={handleCheckout}
        >Checkout</button>
      </Link>
    </div>
  );
}