"use client";

import { Separator } from "@/components/ui/separator";
import LatestProjects from "./latest-projects";

const HomePage = () => {
  return (
    <main className="py-12">
      {/* Hero Section */}
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Hey, I&apos;m Sam</h1>
        <ul className="mt-1 flex gap-4 text-gray-600 dark:text-gray-300">
          <li>Remote Worker</li>|<li>Based in Bandung, Indonesia</li>
        </ul>
      </header>

      {/* About Section */}
      <section className="mb-12">
        <p className="mx-auto text-justify text-sm text-gray-700 dark:text-gray-300">
          I am a software engineer passionate about developing and researching technology and AI products, as well as
          creating a technology community to improve the quality of human life. My interest in business also leads me to
          aspire to become an entrepreneur or founder someday.
        </p>
      </section>

      <Separator className="my-6 dark:bg-gray-300" />

      <LatestProjects />

      <Separator className="my-6 dark:bg-gray-300" />

      {/* Services Section */}
      <section>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Services</h2>
        <div className="mt-4 grid grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
          <p className="hover:cursor-pointer hover:underline hover:underline-offset-4">Web Development</p>
          <p className="hover:cursor-pointer hover:underline hover:underline-offset-4">UI/UX Design</p>
          <p className="hover:cursor-pointer hover:underline hover:underline-offset-4">Backend Development</p>
          <p className="hover:cursor-pointer hover:underline hover:underline-offset-4">System Automation</p>
          <p className="hover:cursor-pointer hover:underline hover:underline-offset-4">Frontend Developer</p>
          <p className="hover:cursor-pointer hover:underline hover:underline-offset-4">SEO Optimization</p>
          <p className="hover:cursor-pointer hover:underline hover:underline-offset-4">Cloud Computing</p>
          <p className="hover:cursor-pointer hover:underline hover:underline-offset-4">Machine Learning</p>
        </div>
      </section>

      <footer className="mb-16">
        <div></div>
      </footer>
    </main>
  );
};

export default HomePage;
