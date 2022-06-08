import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus, faSquarePlus } from "@fortawesome/free-solid-svg-icons";

export default function ItemCount({ stock, initial, comprarItem }) {
  const [cant, setCant] = useState(initial);

  return (
    <div className="card m-3" style={{ maxWidth: 200 }}>
      <div className="card-body ">
        <h5 className="card-title">Pelota</h5>
        <h5 className="card-subtitle mb-2 text-muted">Stock:{stock}</h5>
        <p
          className="card-text d-flex px-1 border border-dark rounded d-flex justify-content-between"
          style={{ maxWidth: 80 }}
        >
          <span
            onClick={() => {
              cant > 1 && setCant(cant - 1);
            }}
          >
            <FontAwesomeIcon
              icon={faSquareMinus}
              size="lg"
              id="restar"
              className="me-2"
            />
          </span>

          <span className="d-flex justify-content-center">{cant}</span>
          <span
            onClick={() => {
              cant < stock && setCant(cant + 1);
            }}
          >
            <FontAwesomeIcon
              icon={faSquarePlus}
              size="lg"
              id="sumar"
              className="ms-2"
            />
          </span>
        </p>
        <button
          className="btn btn-success"
          onClick={() => {
            comprarItem(cant);
          }}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}
