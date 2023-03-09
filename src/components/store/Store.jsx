import React, { useContext } from "react";
import Header from "../common/Header";
import ProductGrid from "./ProductGrid";
import Filter from "./Filter";
import CartModal from "./CartModal";
import './styles/Store.css'
import { Context } from "../../RouteSwitch";
import ProductGridDepartment from "./ProductGridDepartment";


export default function Store({ department }) {
  const {viewCart} = useContext(Context);

  return (
    <div className="store-page">
        <Header />
        <div className="content-wrapper">
          {department !== "store" ? (
            <>
              <Filter department="true" />
              <ProductGridDepartment department={department} />
            </>
          ) : (
            <>
              <Filter />
              <ProductGrid />
            </>
          )}
        </div>
        {viewCart &&
          <CartModal />
        }
    </div>
  );
}