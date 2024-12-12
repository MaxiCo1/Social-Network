"use client";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SubmitButton from "../form/SubmitButton";
import InputText from "../form/InputText";
import RegisterScheme from "@/schemes/register.scheme";
import { useRouter } from "next/navigation";
import { useState } from "react";
import authAPI from "@/service/auth/auth.api";
import { ConflictError } from "@/service/common/errors";

type FormData = {
  username: string;
  password: string;
  name: string;
  photoUrl: string;
};

const RegisterForm = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const methods = useForm<FormData>({
    resolver: yupResolver(RegisterScheme),
  });
  const { handleSubmit } = methods;

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const loginResponse = await authAPI.register(
        data.username,
        data.password,
        data.name,
        data.photoUrl
      );
      console.log(JSON.stringify(loginResponse));
      router.push("/");
      router.refresh();
    } catch (e) {
      if (e instanceof ConflictError) {
        setServerError("El nombre de usuario ya existe");
      } else {
        setServerError("Ha ocurrido un error");
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          label={"Nombre completo:"}
          fieldName={"name"}
          placeholder={"Anakin Skywalker"}
          type="text"
        />
        <InputText
          label={"URL de foto de perfil:"}
          fieldName={"photoUrl"}
          placeholder={"https://..."}
          type="text"
        />
        <InputText
          label={"Nombre de usuario:"}
          fieldName={"username"}
          placeholder={"anakin"}
          type="text"
        />
        <InputText
          label={"Contraseña:"}
          fieldName={"password"}
          type="password"
        />

        <SubmitButton
          label={"Crear cuenta"}
          onSubmit={onSubmit}
          styles="mt-4"
        />
        {serverError && <div className="mt-4 text-red-600">{serverError}</div>}
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
