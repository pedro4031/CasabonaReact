import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";

export default function ItemDetailContainer() {
  const [producto, setProducto] = useState({});
  const { id } = useParams();
  const coleccion = "items";
  const db = getFirestore();
  const Producto = doc(db, coleccion, id);

  useEffect(() => {
    getDoc(Producto).then((prod) => {
      setProducto({ id: prod.id, ...prod.data() });
    });
  }, [id]);

  return (
    <div className="container">
      <h1 className="mt-3">Detalles del producto:</h1>
      <ItemDetail producto={producto} />
    </div>
  );
}
