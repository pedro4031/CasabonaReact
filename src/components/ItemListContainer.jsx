import React from "react";

export default function ItemListContainer({ greeting, nombre }) {
  return (
    <div>
      <h1>
        {greeting} {nombre}
      </h1>
    </div>
  );
}
