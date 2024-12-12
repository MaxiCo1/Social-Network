// Tipo para representar el contenido de un bloque de texto
type TextChild = {
  type: "text";
  text: string;
};

// Tipo para los bloques del body
type BodyBlock = 
  | {
      type: "paragraph";
      children: TextChild[];
    }
  | {
      type: "list";
      format: "unordered" | "ordered";
      children: {
        type: "list-item";
        children: TextChild[];
      }[];
    };

// Tipo para una página FAQ
export type FAQPageType = {
  id: number;
  documentId: string;
  title: string;
  body: BodyBlock[];
  slug: string;
};
