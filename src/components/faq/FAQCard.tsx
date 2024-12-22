"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type FAQCardProps = {
  label: string;
  href: string;
};

const FAQCard = ({ label, href }: FAQCardProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer rounded-lg border border-gray-200 p-4 mb-4 ${
          isActive ? "bg-white text-black" : "bg-transparent"
        }`}
      >
        <h3 className={isActive ? "font-bold" : "font-normal"}>{label}</h3>
      </div>
    </Link>
  );
};

export default FAQCard;
