import FAQSection from "@/components/faq/FAQSection";
import faqsApi from "@/service/faqs/faqs.service";

const FAQPage = async () => {
  const faqsPages = await faqsApi.getFAQPages();
  return (
    <>
      <main>
        <FAQSection sections={faqsPages.data}/>
      </main>
    </>
  );
};

export default FAQPage;
