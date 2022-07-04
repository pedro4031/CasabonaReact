import * as yup from "yup";

export const basicSchema = yup.object().shape({
  nombre: yup.string().required("dato requerido."),
  email: yup.string().email("email no válido.").required("dato requerido."),
  celular: yup
    .number()
    .positive("El numero es incorrecto.")
    .min(1100000000, "celular no válido.")
    .integer()
    .required("dato requerido."),
});
