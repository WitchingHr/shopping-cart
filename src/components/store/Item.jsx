import React, { useContext } from "react";
import Header from "../common/Header";
import CartModal from "./CartModal";
import './styles/Store.css'
import { Context } from "../../RouteSwitch";


export default function Item() {
  const {viewCart} = useContext(Context);

  return (
    <div className="store-page">
        <Header />
        <div className="content-wrapper">

        </div>
        {viewCart &&
          <CartModal />
        }
    </div>
  );
}