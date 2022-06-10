import React from "react";

export default function ItemDetail({ producto }) {
  return (
    <div className="card m-3" style={{ maxWidth: 300 }}>
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">{producto.precio}</p>
        <p className="card-text">{producto.descripcion}</p>
      </div>
      <div className="card-footer text-muted">
        Stock disponible:{producto.stock}
      </div>
    </div>
  );
}
