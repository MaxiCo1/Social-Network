import RegisterForm from "@/components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <h2 className="mb-4">Iniciar sesión</h2>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
