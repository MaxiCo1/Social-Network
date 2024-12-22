"use client";
import RegisterForm from "@/components/auth/RegisterForm";
import Image from "next/image";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const onGoToLink = (href: string) => {
    router.push(href);
    router.refresh();
  };

  return (
    <div className="flex w-full items-center h-[100vh] bg-black justify-center">
      <div className="pr-10">
        <Image
          src="/logo.png"
          alt="logo"
          width={200}
          height={200}
          className="cursor-pointer"
          onClick={() => onGoToLink("/")}
        />
      </div>
      <div className="border border-gray-200 p-10 rounded-xl items-center w-[40%]">
        <h1 className=" text-white text-center">Crear cuenta</h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
