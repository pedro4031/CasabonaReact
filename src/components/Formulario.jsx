import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas/index";
import { MiContexto } from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Formulario() {
  const [finalizado, setFinalizado] = useState(false);
  const [id, setId] = useState("Cargando...");
  const { clear, carrito, ProdsTotales } = useContext(MiContexto);

  const notify = () => {
    toast.success("Pedido enviado.", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      email2: "",
      celular: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  const db = getFirestore();
  const coleccionPedidos = collection(db, "pedidos");

  function onSubmit() {
    const orden = {
      cliente: {
        nombre: values.nombre,
        email: values.email,
        celular: values.celular,
      },
      carrito,
      total: ProdsTotales.precioTotal,
    };

    addDoc(coleccionPedidos, orden)
      .then(({ id }) => setId(id))
      .finally(setFinalizado(true));
    clear();
    notify();
  }

  return (
    <div className="container">
      {finalizado ? (
        <>
          <div className="d-flex justify-content-center display-3 my-5">
            Gracias por tu compra
          </div>

          <div className="row justify-content-center mb-4">
            <div className="col-md-3 text-center">
              Este es el codigo de tu pedido:
            </div>
            <div className="col-md-2 text-center">
              <strong>{id}</strong>
            </div>
          </div>

          <div className="row justify-content-center mb-4">
            <div className="col-md-3 text-center">
              mandaremos una confirmación al mail:
            </div>
            <div className="col-md-2 text-center">
              <strong>{values.email}</strong>
            </div>
          </div>

          <div className="row justify-content-center ">
            <div className="col-md-3 text-center">
              Sigue comprando
              <Link className="btn btn-success ms-2" to={`/home`}>
                <FontAwesomeIcon icon={faArrowRightLong} /> desde aquí
                <FontAwesomeIcon icon={faArrowLeftLong} />
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="d-flex justify-content-center display-2 my-3">
            Unos datos más y terminamos la compra...
          </div>
          <div className="formulario m-auto border border-2 rounded p-3 bg-light">
            {" "}
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="nombre" className="form-label ">
                  <strong> Nombre y apellido</strong>
                </label>
                <input
                  value={values.nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="nombre de cliente"
                  className={
                    errors.nombre && touched.nombre
                      ? "border-danger form-control mb-1"
                      : "form-control mb-5"
                  }
                />
                {errors.nombre && touched.nombre && (
                  <p className="text-danger">{errors.nombre}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="form-label ">
                  {" "}
                  <strong>Correo electrónico</strong>
                </label>
                <input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ejemplo123@ejemplo.com"
                  className={
                    errors.email && touched.email
                      ? "border-danger form-control mb-1"
                      : "form-control mb-5"
                  }
                />
                {errors.email && touched.email && (
                  <p className="text-danger">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="email2" className="form-label ">
                  {" "}
                  <strong>Volver a ingresar correo electrónico</strong>
                </label>
                <input
                  value={values.email2}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="email"
                  id="email2"
                  name="email2"
                  placeholder="ejemplo123@ejemplo.com"
                  className={
                    errors.email2
                      ? "border-danger form-control mb-1"
                      : "form-control mb-5"
                  }
                />
                {errors.email2 && (
                  <p className="text-danger">{errors.email2}</p>
                )}
              </div>
              <div>
                <label htmlFor="celular" className="form-label ">
                  <strong>Celular</strong>
                </label>
                <input
                  value={values.celular}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="number"
                  id="celular"
                  name="celular"
                  placeholder="1234567"
                  className={
                    errors.celular && touched.celular
                      ? "border-danger form-control mb-1"
                      : "form-control mb-5"
                  }
                />
                {errors.celular && touched.celular && (
                  <p className="text-danger">{errors.celular}</p>
                )}
              </div>

              {carrito.length > 0 && (
                <button
                  disabled={isSubmitting}
                  className="btn btn-success mt-3"
                  type="submit"
                >
                  Realizar compra
                </button>
              )}
            </form>
          </div>
        </>
      )}
    </div>
  );
}
