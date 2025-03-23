"use client";

import { Separator } from "@/components/ui/separator";
import LatestProjects from "./latest-projects";

const HomePage = () => {
  return (
    <main className="py-12">
      {/* Hero Section */}
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Hey, I&apos;m Sam</h1>
        <ul className="flex gap-4 text-gray-600 mt-1">
          <li>Remote Worker</li>|<li>Based in Bandung, Indonesia</li>
        </ul>
      </header>

      {/* About Section */}
      <section className="mb-12">
        <p className=" mx-auto text-sm text-gray-700 text-justify">
          I am a software engineer passionate about developing and researching
          technology and AI products, as well as creating a technology community
          to improve the quality of human life. My interest in business also
          leads me to aspire to become an entrepreneur or founder someday.
        </p>
      </section>

      <Separator className="my-6" />

      <LatestProjects />

      <Separator className="my-6" />

      {/* Services Section */}
      <section>
        <h2 className="text-lg font-semibold text-gray-800">Services</h2>
        <div className="mt-4 grid grid-cols-2 gap-6 text-gray-700">
          <p className="hover:underline hover:underline-offset-4 hover:cursor-pointer">
            Web Development
          </p>
          <p className="hover:underline hover:underline-offset-4 hover:cursor-pointer">
            UI/UX Design
          </p>
          <p className="hover:underline hover:underline-offset-4 hover:cursor-pointer">
            Backend Development
          </p>
          <p className="hover:underline hover:underline-offset-4 hover:cursor-pointer">
            System Automation
          </p>
          <p className="hover:underline hover:underline-offset-4 hover:cursor-pointer">
            Frontend Developer
          </p>
          <p className="hover:underline hover:underline-offset-4 hover:cursor-pointer">
            SEO Optimization
          </p>
          <p className="hover:underline hover:underline-offset-4 hover:cursor-pointer">
            Cloud Computing
          </p>
          <p className="hover:underline hover:underline-offset-4 hover:cursor-pointer">
            Machine Learning
          </p>
        </div>
      </section>

      <footer className="mb-16">
        <div></div>
      </footer>
    </main>
  );
};

export default HomePage;
