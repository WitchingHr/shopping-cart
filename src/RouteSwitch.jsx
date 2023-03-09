import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components to route here
import Home from "./components/home/Home";
import Store from "./components/store/Store";
import Cart from "./components/cart/Cart";
import Item from "./components/store/Item";

export const Context = createContext(null);

export default function RouteSwitch() {
  const [viewCart, setViewCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState([]);
  const [deptFilter, setDeptFilter] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <Context.Provider
      value={
        {
          viewCart, setViewCart,
          cart, setCart,
          filter, setFilter,
          products, setProducts,
          deptFilter, setDeptFilter
        }
      }>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store department="store" />} />
          <Route path="/store/:id" element={<Item />} />
          <Route path="/store/mens" element={<Store department="mens" />} />
          <Route path="/store/womens" element={<Store department="womens" />} />
          <Route path="/store/jewelery" element={<Store department="jewelery" />} />
          <Route path="/store/electronics" element={<Store department="electronics" />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}