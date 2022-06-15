import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/productos.json")
      .then((res) => res.json())
      .then((data) => {
        if (id == undefined) {
          setProductos(data);
        } else
          setProductos(data.filter((producto) => producto.categoria == id));
      })
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div className="container">
      <ItemList items={productos} categoria={id} />
    </div>
  );
}
