import React, { useContext } from "react";
import { MiContexto } from "../context/CartContext";
import ItemCount from "./ItemCount";

export default function ItemDetail({ producto }) {
  const { addItem } = useContext(MiContexto);

  function onAdd(cant) {
    if (producto.stock - cant >= 0) {
      addItem(producto, cant);
    } else alert("Stock insuficiente.");
  }

  return (
    <div className="row align-items-center">
      <div className="col-6 d-flex justify-content-center">
        <img
          src={producto.img}
          className=" img-fluid img-thumbnail border-dark border-3"
          alt="foto del producto"
          style={{ height: 600 }}
        />
      </div>
      <div className="col-6 ">
        <h2 className="fs-2 text">{producto.nombre}</h2>
        <p className="fs-3 text">Precio: ${producto.precio}</p>
        <p className="fs-3 text">Marca: {producto.marca}</p>
        <p className="fs-3 text">Descripción: {producto.descripcion}</p>
        <div className="fs-3 text text-muted mb-4">
          Stock disponible:{producto.stock}
        </div>

        <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
      </div>
    </div>
  );
}
