"use client";
import authAPI from "@/service/auth/auth.api";
import Link from "next/link";
import { useRouter } from "next/navigation";

type NavBarProps = {
  loggedUsername?: string
}

const Navbar = ({loggedUsername}: NavBarProps) => {
  const router = useRouter();
  
  const logout = async () => {
    await authAPI.logout();
    router.push("/login");
    router.refresh();
  };

  return (
    <header className="w-full">
      <nav className="flex justify-between w-full bg-blue-500 text-white p-2 mb-2">
        <Link href="/explore">
          <div className="px-4 py-1">LOGO</div>
        </Link>
        {loggedUsername && (
          <div>
            <button className="button-secondary" onClick={() => logout()}>
              Cerrar sesión
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
