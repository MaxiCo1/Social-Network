import FAQSection from "@/components/faq/FAQSection";
import Menu from "@/components/menu/Menu";
import faqsApi from "@/service/faqs/faqs.service";

//menu links
const LINKS = [
  { title: "Inicio", href: "/", image: "/home.svg" },
  { title: "Explorar", href: "/explore", image: "/explore.svg" },
  { title: "FAQ", href: "/faq", image: "/faq.svg" },
  { title: "Perfil", href: "/profile", image: "/profile.svg" },
];

const FAQPage = async () => {
  const faqsPages = await faqsApi.getFAQPages();
  return (
    <main className="bg-black text-white h-[100vh] w-full grid grid-cols-12 gap-4 px-16 align-baseline">
      <div className="col-span-2 h-full mr-4 pt-4">
        <Menu links={LINKS} />
      </div>
      <div className="col-span-10 border-l border-gray-600 h-full pt-4">
        <FAQSection sections={faqsPages.data} />
      </div>
    </main>
  );
};

export default FAQPage;
