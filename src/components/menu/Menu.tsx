"use client";
import { LinkType } from "@/types/link.types";
import { useRouter } from "next/navigation";
import Image from "next/image";

type MenuProps = {
  links: LinkType[];
};

const Menu = ({ links }: MenuProps) => {
  const router = useRouter();
  const onGoToLink = (href: string) => {
    router.push(href);
    router.refresh();
  };
  return (
    <nav className="flex justify-between flex-col">
      <div>
        <ul className="mb-4 w-full">
          <li className="pt-8 p-2">
            <Image
              src="/logo.png"
              alt="logo"
              width={30}
              height={30}
              className="cursor-pointer"
              onClick={() => onGoToLink("/")}
            />
          </li>
          {links &&
            links.map((link, index) => (
              <li
                key={index}
                className="text-xl w-full flex items-center hover:font-bold pt-4 text-white"
              >
                <div className="p-2 flex-shrink-0 ">
                  <Image
                    src={link.image}
                    alt={link.title}
                    width={30}
                    height={30}
                  />
                </div>
                <div
                  onClick={() => onGoToLink(link.href)}
                  className="p-2 w-full flex cursor-pointer"
                >
                  {link.title}
                </div>
              </li>
            ))}
        </ul>
        <button className="button-primary font-semibold w-full" onClick={()=>{onGoToLink("/")}}>Postear</button>
      </div>
    </nav>
  );
};

export default Menu;
