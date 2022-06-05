import React, { useState } from "react";
import ItemList from "./ItemList";
export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  const catalogo = new Promise((res, rej) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          titulo: "pelota",
          precio: 20,
          stock: 20,
          descripcion: "pelota de futbol.",
        },
        {
          id: 2,
          titulo: "auto",
          precio: 350,
          stock: 20,
          descripcion: "auto de juguete.",
        },
        {
          id: 3,
          titulo: "horno",
          precio: 5000,
          stock: 7,
          descripcion: "electrodomestico para cocinar.",
        },
        {
          id: 4,
          titulo: "heladera",
          precio: 8000,
          stock: 8,
          descripcion: "electrodomestico para refrigerar comida.",
        },
        {
          id: 5,
          titulo: "pollo",
          precio: 200,
          stock: 22,
          descripcion: "carne de gallina.",
        },
        {
          id: 6,
          titulo: "ensalada",
          precio: 150,
          stock: 14,
          descripcion: "mix de verduras y otros condimentos.",
        },
        {
          id: 7,
          titulo: "frutos secos",
          precio: 17,
          stock: 60,
          descripcion: "frutos varios disecados.",
        },
        {
          id: 8,
          titulo: "remera",
          precio: 500,
          stock: 30,
          descripcion: "remera talle M.",
        },
        {
          id: 9,
          titulo: "pantalon",
          precio: 800,
          stock: 25,
          descripcion: "pantalon talle M.",
        },
        {
          id: 10,
          titulo: "chocolate",
          precio: 73,
          stock: 45,
          descripcion: "chocolate amargo 40% cacao.",
        },
      ]);
      rej("Error en carga de catálogo...");
    }, 2000);
  });

  catalogo
    .then((productos) => {
      setProductos(productos);
    })
    .catch((error) => {
      console.log(error);
      alert("Error al cargar el catálogo. Por favor recargue la pagina.");
    });

  return (
    <>
      <ItemList items={productos} />
    </>
  );
}
