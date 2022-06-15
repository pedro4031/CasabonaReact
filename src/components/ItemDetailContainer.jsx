import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:3000/productos.json")
      .then((res) => res.json())
      .then((data) => {
        setProducto(data.find((producto) => producto.id == id));
      })
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div className="container">
      <h1 className="mt-3">Detalles del producto:</h1>
      <ItemDetail producto={producto} />
    </div>
  );
}
