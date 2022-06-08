import React from "react";

export default function Item({ titulo, descripcion, stock }) {
  return (
    <div className="card m-3" style={{ maxWidth: 300 }}>
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <button className="btn btn-success">Ver detalles del producto</button>
      </div>
      <div className="card-footer text-muted">Stock disponible:{stock}</div>
    </div>
  );
}
