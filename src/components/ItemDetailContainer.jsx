import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [producto, setProducto] = useState({});

  useEffect(() => {
    const detalles = new Promise((res, rej) => {
      setTimeout(() => {
        fetch("item.json")
          .then((dataJ) => dataJ.json())
          .then((data) => res(data))
          .catch((error) =>
            rej(
              console.log(
                "Error en el funcionamiento de la pagina. Recargue la pagina..." +
                  error
              )
            )
          );
      }, 2000);
    });

    detalles
      .then((data) => setProducto(data))
      .catch(() =>
        alert("Error en carga de la pagina. Por favor recargue la pagina...")
      );
  }, []);

  return <ItemDetail producto={producto} />;
}
