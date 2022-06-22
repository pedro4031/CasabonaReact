import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { MiContexto } from "../context/CartContext";

export default function CartWidget() {
  const { ProdsTotales } = useContext(MiContexto);

  return (
    <Link className="text-decoration-none" to="/carrito">
      <div className="mx-3  d-flex ">
        <FontAwesomeIcon
          icon={faBasketShopping}
          className="text-danger me-1 pt-2 pb-3 pt-sm-2 pb-sm-3 pt-md-0 pb-md-0 "
          size="lg"
        />
        <div className="text-danger pt-sm-2 pt-md-0">
          {ProdsTotales.cantTotal}
        </div>
      </div>
    </Link>
  );
}
