import React, { useState, createContext, useEffect } from "react";

export const MiContexto = createContext({});

export default function CartContext({ children }) {
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito")) || []
  );
  const [ProdsTotales, setProdsTotales] = useState({});

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    let cantTotal = 0;
    let precioTotal = 0;
    carrito.forEach((producto) => {
      cantTotal += producto.cant;
      precioTotal += producto.cant * producto.precio;
    });
    setProdsTotales({ cantTotal, precioTotal });
  }, [carrito]);

  function isInCart(productoId) {
    return carrito.findIndex((Producto) => Producto.id === productoId) > -1
      ? true
      : false;
  }

  function addItem(producto, cant) {
    if (isInCart(producto.id)) {
      alert("el producto ya se encuentra en el carrito");
    } else {
      setCarrito([
        ...carrito,
        {
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          cant,
        },
      ]);
    }
  }

  function removeItem(productoId) {
    setCarrito(carrito.filter((producto) => producto.id != productoId));
  }
  function clear() {
    setCarrito([]);
  }

  return (
    <MiContexto.Provider
      value={{
        isInCart,
        addItem,
        removeItem,
        clear,
        carrito,
        ProdsTotales,
      }}
    >
      {children}
    </MiContexto.Provider>
  );
}
