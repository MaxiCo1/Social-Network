import LoginForm from "@/components/auth/LoginForm";


const LoginPage = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <h2 className="mb-4">Iniciar sesión</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
