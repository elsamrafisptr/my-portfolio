import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { urlEndpoint } from "@/common/constant";

interface ProjectCardProps {
  title: string;
  desc: string;
  date: string;
  imageUrl: string;
}

const ProjectCard = ({ title, desc, date, imageUrl }: ProjectCardProps) => {
  return (
    <Card className="border-none shadow-none">
      <CardContent className="p-0">
        <Image
          src={urlEndpoint + imageUrl}
          alt={title || "Project Image"}
          width={1024}
          height={1024}
          className="bg-gray-200 aspect-video object-cover rounded"
          loading="lazy"
          priority={false}
        />
      </CardContent>
      <CardHeader className="p-0 mt-2">
        <p className="text-sm text-gray-500">{date}</p>
        <CardTitle className="text-base font-medium line-clamp-1 tracking-normal">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-2 text-xs text-gray-600">
          {desc}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ProjectCard;
