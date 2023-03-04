import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components to route here
import Home from "./components/home/Home";
import Store from "./components/store/Store";
import Cart from "./components/cart/Cart";

export const Context = createContext(null);

export default function RouteSwitch() {
  const [viewCart, setViewCart] = useState(false);

  return (
    <Context.Provider value={{viewCart, setViewCart}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}