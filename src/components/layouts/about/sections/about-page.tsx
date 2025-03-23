import { AboutMeContent } from "@/common/constant";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="py-12 min-h-screen">
      {/* Hero Section */}
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Hey, This is about Me {'"Sam"'}</h1>
        <ul className="flex gap-4 text-gray-600 mt-1">
          <li>Remote Worker</li>|<li>Based in Bandung, Indonesia</li>
        </ul>
      </header>

      {/* About Section */}
      <section className="flex flex-col gap-4">
        <p className=" mx-auto text-sm text-gray-700 text-justify">
          {AboutMeContent.description}
        </p>
      </section>

      <Separator className="my-6" />

      {/* Works Experiences */}
      <section>
        <span className="">
          <h1 className="pb-4 font-semibold text-lg">
            Professional Experiences
          </h1>
        </span>
        <div className="flex flex-col gap-4">
          {AboutMeContent.work_experiences.map((item, index) => {
            return (
              <Link
                key={index}
                href={`/about/professional/${item.type
                  .replaceAll(" ", "-")
                  .toLowerCase()}-${item.title
                  .replaceAll(" ", "-")
                  .toLowerCase()}`}
                className="hover:bg-gray-100/50 border border-gray-300/0 hover:border-gray-300/50 rounded-lg relative duration-100 -m-2 p-2"
              >
                <article className="grid grid-cols-3 gap-2">
                  <div className="col-span-2">
                    <h1 className="text-sm font-semibold">
                      {item.type} {item.title} ({item.work_type})
                    </h1>
                    <p className="text-xs">
                      <span className="font-medium">{item.company_name}</span> -{" "}
                      {item.company_location}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <h1 className="text-sm text-right">
                      {item.start_date} - {item.end_date}
                    </h1>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>

      <footer className="mb-16">
        <div></div>
      </footer>
    </main>
  );
};

export default AboutPage;
