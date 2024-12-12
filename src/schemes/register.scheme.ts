import * as yup from "yup";

const RegisterScheme = yup
  .object({
    username: yup.string().required("Este campo es obligatorio"),
    password: yup.string().required("Este campo es obligatorio"),
    name: yup.string().required("Este campo es obligatorio"),
    photoUrl: yup.string().required("Este campo es obligatorio"),
  })
  .required();

  export default RegisterScheme