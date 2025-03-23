import { ProjectsContent } from "@/common/constant";
import ProjectCard from "@/components/elements/project-card";
import { Separator } from "@/components/ui/separator";

const ProjectsPage = () => {
  return (
    <main className="py-12 min-h-screen">
      {/* Hero Section */}
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Hey, I&apos;m Sam</h1>
        <ul className="flex gap-4 text-gray-600 mt-1">
          <li>Remote Worker</li>|<li>Based in Bandung, Indonesia</li>
        </ul>
      </header>

      <Separator className="my-6" />

      {/* Works Experiences */}
      <section className="mb-12">
        <div className="mt-4 grid grid-cols-2 gap-6">
          {ProjectsContent.map((item, index) => (
            <ProjectCard
              key={index}
              title={item.title}
              desc={item.description}
              date={item.tags?.[0] || "Unknown Date"}
              imageUrl={item.assetsImage?.[0] || "/default-image.jpg"}
            />
          ))}
        </div>
      </section>

      <footer className="mb-16">
        <div></div>
      </footer>
    </main>
  );
};

export default ProjectsPage;
