import React from "react";

export default function Item({ titulo, descripcion, stock }) {
  return (
    <div className="card m-3" style={{ maxWidth: 300 }}>
      <div class="card-body">
        <h5 class="card-title">{titulo}</h5>
        <p class="card-text">{descripcion}</p>
        <button className="btn btn-success">Ver detalles del producto</button>
      </div>
      <div class="card-footer text-muted">Stock disponible:{stock}</div>
    </div>
  );
}
