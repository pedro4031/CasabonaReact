import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);

  const db = getFirestore();
  const coleccion = "items";
  const coleccionDeProductos = collection(db, coleccion);

  useEffect(() => {
    getDocs(coleccionDeProductos)
      .then((data) =>
        data.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
      )
      .then((prods) => {
        if (id == undefined) {
          setProductos(prods);
        } else {
          setProductos(prods.filter((cat) => cat.categoria == id));
        }
      });
  }, [id]);

  return (
    <div className="container">
      <ItemList items={productos} categoria={id} />
    </div>
  );
}
