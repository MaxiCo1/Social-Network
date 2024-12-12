import FAQSection from "@/components/faq/FAQSection";
import faqsApi from "@/service/faqs/faqs.service";

export default async function FAQPage({
  params,
}: {
  params: { slug: string };
}) {
  const faqsPages = await faqsApi.getFAQPages();
  const faqPage = faqsPages.data.find(page => page.slug === `/${params.slug}`);

  return (
    <>
      <main>
        <FAQSection sections={faqsPages.data} />
        <section className="flex flex-col">
          <h2>{faqPage?.title}</h2>
          {faqPage?.body.map((block, index) => (
            <div key={index}>
              {block.type === "paragraph" && (
                <p>{block.children.map((child) => child.text).join("")}</p>
              )}
              {block.type === "list" && (
                <ul>
                  {block.children.map((item, i) => (
                    <li key={i}>
                      {item.children.map((child) => child.text).join("")}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
