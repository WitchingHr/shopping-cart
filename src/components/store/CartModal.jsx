import React, { useRef, useEffect, useContext, Fragment } from "react";
import { Context } from "../../RouteSwitch";
import { Link } from "react-router-dom";
import './styles/CartModal.css';

export default function CartModal() {
  // Get context
  const {viewCart, setViewCart, cart} = useContext(Context);

  // Close modal if clicking outside component
  const cartRef = useRef(null);
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
  useOutsideClick(cartRef);

  // Close modal when click Checkout
  function handleCheckout() {
    setViewCart(!viewCart);
  }
  
  // Get total price of items in cart
  const total = cart.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);

  return (
    <div
      className="CartModal"
      ref={cartRef}
    >
      {cart.length === 0 ? (
        <div style={{color: "white"}}>Cart is empty!</div>
      ) : (
        <>
          <ul className="modal-list">
            {cart.map(product =>
              <Fragment key={product.id}>
                <li className="modal-item">
                  <img src={product.image} alt="product" className="modal-image" />
                  <div className="modal-item-info">
                    <span className="modal-name">{product.title}</span>
                    <div className="modal-price-wrapper">
                      <span className="modal-quantity">Quantity: {product.quantity}</span>
                      <span className="modal-price">${(Math.round((product.price * product.quantity) * 100) / 100).toFixed(2)}</span>
                    </div>
                  </div>
                </li>
                <hr></hr>
              </Fragment>
            )}
          </ul>
          <div className="modal-button-wrapper">
            <Link to="/cart" className="modal-checkout-link">
              <button
                className="go-to-cart button"
                onClick={handleCheckout}
              >Go to Cart</button>
            </Link>
            <span className="modal-total">Total: ${(Math.round(total * 100) / 100).toFixed(2)}</span>
          </div>
        </>
      )}
    </div>
  );
}