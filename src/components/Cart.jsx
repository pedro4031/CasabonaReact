import React from "react";
import CartTabla from "./CartTabla";
import CartVacio from "./CartVacio";
import { MiContexto } from "../context/CartContext";
import { useContext } from "react";

export default function Cart() {
  const { carrito } = useContext(MiContexto);

  return (
    <div className="container mt-3">
      {carrito.length > 0 ? <CartTabla /> : <CartVacio />}
    </div>
  );
}
