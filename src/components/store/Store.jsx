import React, { useContext } from "react";
import Header from "../common/Header";
import ProductGrid from "./ProductGrid";
import Filter from "./Filter";
import CartModal from "./CartModal";
import './styles/Store.css'
import { Context } from "../../RouteSwitch";


export default function Store({ department }) {
  const {viewCart} = useContext(Context);

  return (
    <div className="store-page">
        <Header />
        <div className="content-wrapper">
          {department !== "store" ? (
            <Filter department="true" />
          ) : (
            <Filter />
          )}
          <ProductGrid department={department}/>
        </div>
        {viewCart &&
          <CartModal />
        }
    </div>
  );
}