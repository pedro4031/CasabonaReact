import React, { useState, createContext, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const MiContexto = createContext({});

export default function CartContext({ children }) {
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito")) || []
  );
  const [ProdsTotales, setProdsTotales] = useState({});

  const notify = () => {
    toast.error("Ya se encuentra en el carrito.", {
      theme: "colored",
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

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
      notify();
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
