import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function ItemCount({ stock, initial, onAdd }) {
  const [cant, setCant] = useState(initial);
  const [mostrar, setMostrar] = useState(true);

  return (
    <div
      className="card m-3 border border-dark "
      style={{ maxWidth: 200, backgroundColor: "rgb(179, 229, 247)" }}
    >
      <div className="card-body text-center">
        <p
          className="card-text d-flex mx-auto mb-2 px-1 border border-dark rounded d-flex justify-content-between "
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
              type="button"
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
              type="button"
            />
          </span>
        </p>

        {mostrar ? (
          <button
            className="btn btn-success"
            onClick={() => {
              onAdd(cant);
              setMostrar(false);
            }}
          >
            Agregar al Carrito
          </button>
        ) : (
          <Link className="btn btn-success" to={`/carrito`}>
            Ir al carrito
          </Link>
        )}
      </div>
    </div>
  );
}
