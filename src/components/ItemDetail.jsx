import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus, faSquarePlus } from "@fortawesome/free-solid-svg-icons";

export default function ItemDetail({ producto }) {
  let initial = 1;
  let Stock = producto.stock;
  const [cant, setCant] = useState(initial);

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
        <p
          className="card-text d-flex px-1 border border-dark rounded d-flex justify-content-between"
          style={{ maxWidth: 100 }}
        >
          <span
            onClick={() => {
              cant > 1 && setCant(cant - 1);
            }}
          >
            <FontAwesomeIcon
              icon={faSquareMinus}
              size="xl"
              id="restar"
              className="me-2"
            />
          </span>

          <span className="d-flex justify-content-center">{cant}</span>
          <span
            onClick={() => {
              cant < Stock && setCant(cant + 1);
            }}
          >
            <FontAwesomeIcon
              icon={faSquarePlus}
              size="xl"
              id="sumar"
              className="ms-2"
            />
          </span>
        </p>
        <button className="btn btn-success" onClick={() => {}}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}

// <div className="card border-dark m-3" style={{ maxWidth: 300 }}>
//   <h5 className="card-header">{producto.nombre}</h5>
//   <img
//     src={producto.img}
//     className="card-img-top img-thumbnail"
//     alt="foto del producto"
//   />
//   <div className="card-body">
//     <p className="card-text">precio: ${producto.precio}</p>
//     <p className="card-text">Marca: {producto.marca}</p>
//     <p className="card-text">Descripción: {producto.descripcion}</p>
//   </div>
//   <div className="card-footer text-muted">
//     Stock disponible:{producto.stock}
//   </div>
// </div>
