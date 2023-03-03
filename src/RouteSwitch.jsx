import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components to route here
import Home from "./components/home/Home";
import Store from "./components/store/Store";

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
}