import { AboutMeContent } from "@/common/constant";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="min-h-screen py-12 pb-16 md:pb-12">
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
        <div className="flex flex-col gap-6 md:gap-4">
          {AboutMeContent.work_experiences.map((item, index) => {
            return (
              <Link
                key={index}
                href={`/about/professional/${item.type.replaceAll(" ", "-").toLowerCase()}-${item.title
                  .replaceAll(" ", "-")
                  .toLowerCase()}`}
                className="relative -m-2 rounded-lg border border-gray-300/0 p-2 duration-100 hover:border-gray-300/50 hover:bg-gray-100/50"
              >
                <article className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-2">
                  <div className="md:col-span-2">
                    <h1 className="text-sm font-semibold">
                      {item.type} {item.title} ({item.work_type})
                    </h1>
                    <p className="text-sm md:text-xs">
                      <span className="font-medium">{item.company_name}</span> - {item.company_location}
                    </p>
                  </div>
                  <div className="row-start-1 md:col-span-1 md:row-start-2">
                    <h1 className="text-left text-xs md:text-right md:text-sm">
                      {item.start_date} - {item.end_date}
                    </h1>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>

      <Separator className="my-6 dark:bg-gray-300" />

      <section>
        <span className="">
          <h1 className="pb-4 text-lg font-semibold dark:text-gray-100">Organizational Experiences</h1>
        </span>
        <div className="flex flex-col gap-6 md:gap-4">
          {AboutMeContent.org_experiences.map((item, index) => {
            return (
              <Link
                key={index}
                href={`/about/org/${item.org_type.replaceAll(" ", "-").toLowerCase()}-${item.title
                  .replaceAll(" ", "-")
                  .toLowerCase()}`}
                className="relative -m-2 rounded-lg border border-gray-300/0 p-2 duration-100 hover:border-gray-300/50 hover:bg-gray-100/50"
              >
                <article className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-2">
                  <div className="md:col-span-2">
                    <h1 className="text-sm font-semibold">
                      {item.title} ({item.org_type})
                    </h1>
                    <p className="text-sm md:text-xs">
                      <span className="font-medium">{item.org_name}</span> - {item.org_location}
                    </p>
                  </div>
                  <div className="row-start-1 md:col-span-1 md:row-start-2">
                    <h1 className="text-left text-xs md:text-right md:text-sm">
                      {item.start_date} - {item.end_date}
                    </h1>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>

      <Separator className="my-6 dark:bg-gray-300" />

      <section>
        <span className="">
          <h1 className="pb-4 text-lg font-semibold dark:text-gray-100">Education</h1>
        </span>
        <div className="flex flex-col gap-6 md:gap-4">
          {AboutMeContent.education_experiences.map((item, index) => {
            return (
              <Link
                key={index}
                href={""}
                className="relative -m-2 rounded-lg border border-gray-300/0 p-2 duration-100 hover:border-gray-300/50 hover:bg-gray-100/50"
              >
                <article className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-2">
                  <div className="md:col-span-2">
                    <h1 className="text-left text-sm font-semibold">
                      {item.title} ({item.score})
                    </h1>
                    <p className="text-left text-sm md:text-xs">
                      <span className="font-medium">{item.education_name}</span> - {item.education_location}
                    </p>
                  </div>
                  <div className="row-start-1 md:col-span-1 md:row-start-2">
                    <h1 className="text-left text-xs md:text-right md:text-sm">
                      {item.start_date} - {item.end_date}
                    </h1>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>

      <Separator className="my-6 dark:bg-gray-300" />

      <section>
        <span className="">
          <h1 className="pb-4 text-lg font-semibold dark:text-gray-100">Achievements</h1>
        </span>
        <div className="flex flex-col gap-6 md:gap-4">
          {AboutMeContent.achievements.map((item, index) => {
            return (
              <Link
                key={index}
                href={""}
                className="relative -m-2 rounded-lg border border-gray-300/0 p-2 duration-100 hover:border-gray-300/50 hover:bg-gray-100/50"
              >
                <article className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-2">
                  <div className="md:col-span-2">
                    <h1 className="text-left text-sm font-semibold">{item.title}</h1>
                    <p className="text-left text-sm md:text-xs">
                      <span className="font-medium">{item.achievement_producer}</span> -{" "}
                      <Link href={item.credentials_url} className="underline">
                        {item.credentials_id}
                      </Link>
                    </p>
                  </div>
                  <div className="row-start-1 md:col-span-1 md:row-start-2">
                    <h1 className="text-left text-xs md:text-right md:text-sm">{item.credentials_year_publish}</h1>
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
