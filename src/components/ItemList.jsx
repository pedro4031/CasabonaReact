import React from "react";
import Item from "./Item";

export default function ItemList({ items, categoria }) {
  return (
    <>
      <h1 className="my-3">Catalogo: {categoria || "Todo"}</h1>
      <div className="d-flex flex-wrap justify-content-evenly">
        {items?.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            titulo={item.nombre}
            descripcion={item.descripcion}
            stock={item.stock}
          />
        ))}
      </div>
    </>
  );
}
