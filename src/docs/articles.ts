import Charles from "../assets/peoples/Charles.webp";
import Resource1 from "../assets/resource_1.jpg";

export interface Article {
  slug: string;
  title: string;
  category: string;
  bannerImage: string;
  author: {
    name: string;
    bio: string;
    image: string;
    role: string;
  };
  body: {
    header?: string;
    content: string;
  }[];
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export const getMoreArticles = (currentSlug: string): Article[] => {
  return articles.filter((article) => article.slug !== currentSlug).slice(0, 3);
};

export const articles: Article[] = [
  {
    slug: "understanding-basics-contract-law-small-business",
    title: "Understanding the Basics of Contract Law for Small Business Owners",
    category: "BUSINESS",
    bannerImage: Resource1,
    author: {
      name: "Charles Adeyoriju",
      bio: "Passionate about sharing insights, expertise, and knowledge on various topics to help our loyal readers worldwide.",
      image: Charles,
      role: "SENIOR PARTNER",
    },
    body: [
      {
        content:
          "Contracts are the backbone of business transactions, serving to legally binding agreements that define the rights and obligations of parties involved. For small business owners, understanding the basics of contract law is crucial for protecting their interests and minimizing risk. Whether it's a partnership agreement, client contract, employment agreement, or vendor relationship, having solid contracts helps prevent disputes and ensure smooth business operations.",
      },
      {
        content:
          "A contract represents a meeting of the minds regarding the essential elements of agreements, providing a framework for parties to negotiate terms, define responsibilities, and resolve conflicts. By familiarizing themselves with key contract principles, small business owners can enter into agreements confidently, ensuring their rights are protected under the law.",
      },
      {
        header: "Essential Elements of a Valid Contract",
        content:
          "Several essential elements must be present for a contract to be legally enforceable. These include offer, acceptance, consideration, legal capacity, legal purpose, and genuine consent. An offer occurs when one party is invited, indicating an intention to enter into a contract under specific terms. Acceptance occurs when the other party agrees to the terms of the offer, creating mutual assent or meeting of the minds.",
      },
      {
        content:
          "Consideration refers to something of value exchanged between parties, such as goods, services, or money. Both parties must have the legal capacity to enter into a contract, meaning a basic purpose. In addition, the contract cannot be formed without duress or fraud. Once these key elements are fully supported by evidence including drafting, negotiating, and securing contracts that stand and enforceable.",
      },
    ],
  },
];
