"use client";
import LoginForm from "@/components/auth/LoginForm";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const onGoToLink = (href: string) => {
    router.push(href);
    router.refresh();
  };
  return (
    <div className="flex w-full flex-col items-center h-[100vh] bg-black justify-center">
      <div className="pb-6">
        <Image
          src="/logo.png"
          alt="logo"
          width={80}
          height={80}
          className="cursor-pointer"
          onClick={() => onGoToLink("/")}
        />
      </div>
      <div className="border border-gray-200 p-10 rounded-xl items-center ">
        <h1 className="mb-4 text-white text-center">Iniciar sesión</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
