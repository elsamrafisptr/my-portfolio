import AboutPage from "@/components/layouts/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About | Elsam Rafi Saputra`,
  description: `Software & AI Engineer Enthusiast`,
  openGraph: {
    title: `About | Elsam Rafi Saputra`,
    description: `Software & AI Engineer Enthusiast`,
    authors: `Elsam Rafi Saputra`,
  },
};

const About = () => {
  return <AboutPage />;
};

export default About;
