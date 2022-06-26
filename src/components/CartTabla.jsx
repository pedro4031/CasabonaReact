import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { MiContexto } from "../context/CartContext";
import { useContext } from "react";
export default function CartTabla() {
  const { carrito, ProdsTotales, clear, removeItem, comprar } =
    useContext(MiContexto);
  return (
    <>
      <table className="table table-sm table-bordered table-striped text-center">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio por unidad</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {carrito?.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.nombre}</td>
              <td>${item.precio}</td>
              <td className=" justify-content-center">{item.cant}</td>
              <td>
                <FontAwesomeIcon
                  type="button"
                  onClick={() => removeItem(item.id)}
                  icon={faTrashCan}
                  className="text-danger me-1 pt-2 pb-3 pt-sm-2 pb-sm-3 pt-md-0 pb-md-0 "
                  size="lg"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {" "}
        <div className="d-flex justify-content-center mt-5">
          IMPORTE TOTAL ${ProdsTotales.precioTotal} ({ProdsTotales.cantTotal}{" "}
          Producto/s)
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-danger" onClick={clear}>
            Vaciar carrito
          </button>
          <button className="btn btn-success ms-4" onClick={comprar}>
            Realizar compra
          </button>
        </div>
      </div>
    </>
  );
}
