export interface ProjectsContentProps {
  title: string;
  slug: string;
  assetsImage: string[];
  description: string;
  tags: string[];
}

export const ProjectsContent: ReadonlyArray<ProjectsContentProps> = [
  {
    title: "StuntFree Mobile App",
    slug: "stuntfree-mobile-app",
    assetsImage: ["/stuntfree-app.png", "/bg.jpg"],
    description:
      "A mobile app aimed at promoting child health and nutrition, with interactive features and an intuitive interface.",
    tags: ["Mobile App", "Healthcare", "UI/UX Design"],
  },
  {
    title: "Islamic Education Landing Page",
    slug: "islamic-education-landing-page",
    assetsImage: ["/islamic-education.png", "/bg.jpg"],
    description:
      "A dedicated landing page designed to promote Islamic educational resources and programs, with a modern and intuitive layout.",
    tags: ["Education", "Landing Page", "UI/UX Design"],
  },
  {
    title: "Healthcare Registration Management System",
    slug: "healthcare-registration-management-system",
    assetsImage: ["/healthcare-registration-system.png", "/bg.jpg"],
    description:
      "A streamlined system to manage patient registrations for local healthcare providers, ensuring efficiency and ease of use.",
    tags: ["Healthcare", "Management System"],
  },
  {
    title: "CV. UPB Berkah Tani Website",
    slug: "cv-upb-berkah-tani-website",
    assetsImage: ["/cv-upb-berkah-tani.png", "/bg.jpg"],
    description:
      "A corporate website for CV. UPB Berkah Tani, showcasing agricultural products and services with a professional design.",
    tags: ["Corporate", "Agriculture", "Website"],
  },
  {
    title: "Cooleath Official E-Commerce Website",
    slug: "cooleath-official-e-commerce-website",
    assetsImage: ["/cooleath-official-website.png", "/bg.jpg"],
    description:
      "An e-commerce platform for Cooleath, enabling seamless online shopping with a user-friendly interface and secure checkout.",
    tags: ["E-Commerce", "Website", "Brand"],
  },
  {
    title: "Mobile Recipe App",
    slug: "mobile-recipe-app",
    assetsImage: ["/mobile-recipe-app.png", "/bg.jpg"],
    description:
      "A sleek and functional mobile application for browsing, saving, and sharing recipes, with a focus on usability and design.",
    tags: ["Mobile App", "Recipe", "UI/UX Design"],
  },
  {
    title: "E-Grocery Mobile App",
    slug: "e-grocery-mobile-app",
    assetsImage: ["/e-grocery-app.png", "/bg.jpg"],
    description:
      "A mobile application for convenient online grocery shopping, featuring smart filters and a smooth user experience.",
    tags: ["Mobile App", "E-Grocery", "UI/UX Design"],
  },
  {
    title: "Roufish Mobile App",
    slug: "roufish-mobile-app",
    assetsImage: ["/roufish-app.png", "/bg.jpg"],
    description:
      "An innovative mobile app tailored for Roufish, providing comprehensive solutions for fish farming and management.",
    tags: ["Mobile App", "Fishery"],
  },
] as const;
