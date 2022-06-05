import React from "react";
import Item from "./Item";

export default function ItemList({ items }) {
  return (
    <>
      <h5 className="ms-3">Catalogo:</h5>
      <div className="d-flex flex-wrap">
        {items.map((item) => (
          <Item
            titulo={item.titulo}
            descripcion={item.descripcion}
            stock={item.stock}
          />
        ))}
      </div>
    </>
  );
}
