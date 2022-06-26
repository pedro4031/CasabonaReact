import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faArrowLeftLong,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <FontAwesomeIcon icon={faCartPlus} size="10x" />
      </div>

      <div className=" text-center mt-5">
        El carrito esta vacío. Puedes agregar productos
        <Link className="btn btn-success ms-2" to={`/home`}>
          <FontAwesomeIcon icon={faArrowRightLong} /> desde aquí{" "}
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </Link>
      </div>
    </>
  );
}
