"use client";
import authAPI from "@/service/auth/auth.api";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const logout = async () => {
    await authAPI.logout();
    router.push("/login");
    router.refresh();
  };
  return (
    <div className="w-full">
      <button
        className="border-2 border-red-500 rounded-lg px-6 py-2 text-white hover:bg-red-500 hover:text-white w-full"
        onClick={() => logout()}
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default LogoutButton;
