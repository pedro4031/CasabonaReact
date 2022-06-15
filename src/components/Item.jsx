import React from "react";
import { Link } from "react-router-dom";

export default function Item({ id, titulo, descripcion, stock }) {
  return (
    <div
      className="card border-dark text-bg-primary m-3"
      style={{ width: 300 }}
    >
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <Link className="btn btn-success" to={`/producto/${id}`}>
          Ver detalles del producto
        </Link>
      </div>
      <div className="card-footer text-muted">Stock disponible:{stock}</div>
    </div>
  );
}
