import ContactPage from "@/components/layouts/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact | Elsam Rafi Saputra`,
  description: `Software & AI Engineer Enthusiast`,
  openGraph: {
    title: `Contact | Elsam Rafi Saputra`,
    description: `Software & AI Engineer Enthusiast`,
    authors: `Elsam Rafi Saputra`,
  },
};

const Contact = () => {
  return <ContactPage />;
};

export default Contact;
