"use client"
import { usePathname, useRouter } from "next/navigation";
import { FAQPageType } from "@/types/faq.types";

type FAQSectionProps = {
  sections: FAQPageType[];
};

const FAQSection = ({ sections }: FAQSectionProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleSectionClick = (slug: string) => {
    router.push(`/faq${slug}`);
  };

  const active = (slug: string) => {
    return (
      "http://localhost:3000" + pathname === "http://localhost:3000/faq" + slug
    );
  };

  return (
    <section className="flex flex-col w-full ">
      <h1 className="mb-4 text-center">Preguntas frecuentes</h1>
      <div>
        {sections.map((section) => (
          <div key={section.slug}>
            {/* Título de la sección, al hacer clic se activa el acordeón y redirige */}
            <div
              className={`cursor-pointer text-lg border-2 border-white mb-4 rounded-full p-4 ${
                active(section.slug) && "bg-white"
              }`}
              onClick={() => handleSectionClick(section.slug)}
            >
              <h2
                className={`text-white font-semibold ${
                  active(section.slug) && "font-extrabold text-black"
                }`}
              >
                {section.title}
              </h2>
            </div>

            {/* Contenido de la sección, solo visible si está activa */}
            {active(section.slug) && (
              <div className="mt-2 text-white px-4 pb-4">
                {section.body.map((block, index) => (
                  <div key={index} className="mt-2">
                    {block.type === "paragraph" && (
                      <p>
                        {block.children.map((child) => child.text).join("")}
                      </p>
                    )}
                    {block.type === "list" && (
                      <ul className="list-disc pl-5">
                        {block.children.map((item, i) => (
                          <li key={i}>
                            {item.children.map((child) => child.text).join("")}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
