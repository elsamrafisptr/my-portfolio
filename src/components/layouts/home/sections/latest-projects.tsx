"use client";

import { ProjectsContent } from "@/common/constant";
import ProjectCard from "@/components/elements/project-card";
import useScreenSize from "@/hooks/useScreenSize";

const LatestProjects = ({ limit }: { limit?: number }) => {
  const { isMobile } = useScreenSize();
  const displayLimit = limit || (isMobile ? 2 : 3);

  return (
    <section className="mb-12">
      <h2 className="text-lg font-semibold text-gray-800">Latest Projects</h2>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-6">
        {ProjectsContent.slice(0, displayLimit).map((item, index) => (
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
  );
};

export default LatestProjects;
