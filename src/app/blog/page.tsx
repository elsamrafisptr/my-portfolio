import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Blog | Elsam Rafi Saputra`,
  description: `Software & AI Engineer Enthusiast`,
  openGraph: {
    title: `Blog | Elsam Rafi Saputra`,
    description: `Software & AI Engineer Enthusiast`,
    authors: `Elsam Rafi Saputra`,
  },
};

const Blog = () => {
  return (
    <main className="min-h-screen flex justify-center items-center">
      Blog Page is Under Maintenance
    </main>
  );
};

export default Blog;
