import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Diaz%
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navBarHamburguerMenu"
          aria-controls="navBarHamburguerMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navBarHamburguerMenu">
          <ul className="navbar-nav me-auto ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                INICIO
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CATEGORIAS
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/categorias/celulares">
                    CELULARES
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categorias/comida">
                    COMIDA
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categorias/juguetes">
                    JUGUETES
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categorias/ropa">
                    ROPA
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/categorias/electrodomesticos"
                  >
                    ELECTRODOMESTICOS
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="#">
                OFERTAS
              </Link>
            </li>
          </ul>
          <CartWidget />
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-danger" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
