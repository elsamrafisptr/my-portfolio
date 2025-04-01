import { AboutMeContent } from "@/common/constant";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="min-h-screen py-12">
      {/* Hero Section */}
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Hey, This is about Me {'"Sam"'}</h1>
        <ul className="mt-1 flex gap-4 text-gray-600 dark:text-gray-300">
          <li>Remote Worker</li>|<li>Based in Bandung, Indonesia</li>
        </ul>
      </header>

      {/* About Section */}
      <section className="flex flex-col gap-4">
        <p className="mx-auto text-justify text-sm text-gray-700 dark:text-gray-300">{AboutMeContent.description}</p>
      </section>

      <Separator className="my-6 dark:bg-gray-300" />

      {/* Works Experiences */}
      <section>
        <span className="">
          <h1 className="pb-4 text-lg font-semibold dark:text-gray-100">Professional Experiences</h1>
        </span>
        <div className="flex flex-col gap-4">
          {AboutMeContent.work_experiences.map((item, index) => {
            return (
              <Link
                key={index}
                href={`/about/professional/${item.type.replaceAll(" ", "-").toLowerCase()}-${item.title
                  .replaceAll(" ", "-")
                  .toLowerCase()}`}
                className="relative -m-2 rounded-lg border border-gray-300/0 p-2 duration-100 hover:border-gray-300/50 hover:bg-gray-100/50"
              >
                <article className="grid grid-cols-3 gap-2">
                  <div className="col-span-2">
                    <h1 className="text-sm font-semibold">
                      {item.type} {item.title} ({item.work_type})
                    </h1>
                    <p className="text-xs">
                      <span className="font-medium">{item.company_name}</span> - {item.company_location}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <h1 className="text-right text-sm">
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
