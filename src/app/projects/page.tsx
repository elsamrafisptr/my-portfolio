import ProjectsPage from "@/components/layouts/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Projects | Elsam Rafi Saputra`,
  description: `Software & AI Engineer Enthusiast`,
  openGraph: {
    title: `Projects | Elsam Rafi Saputra`,
    description: `Software & AI Engineer Enthusiast`,
    authors: `Elsam Rafi Saputra`,
  },
};

const Projects = () => {
  return <ProjectsPage />;
};

export default Projects;
