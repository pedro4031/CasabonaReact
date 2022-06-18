import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

export default function ItemDetail({ producto }) {
  const [Stock, setStock] = useState(producto.stock);
  const [mostrar, setMostrar] = useState(true);

  useEffect(() => {
    setStock(producto.stock);
  }, [producto.stock]);

  function onAdd(cant) {
    if (Stock - cant >= 0) {
      setStock(Stock - cant);
      setMostrar(false);
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
          Stock disponible:{Stock}
        </div>

        {mostrar ? (
          <ItemCount initial={1} stock={Stock} onAdd={onAdd} />
        ) : (
          <Link className="btn btn-success" to="/cart">
            Terminar compra
          </Link>
        )}
      </div>
    </div>
  );
}
