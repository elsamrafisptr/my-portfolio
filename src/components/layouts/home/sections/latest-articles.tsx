import ArticleCard from "@/components/elements/article-card";
import React from "react";

const LatestArticles = () => {
  return (
    <section className="mb-12">
      <h2 className="text-lg font-semibold text-gray-800">Latest Articles</h2>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-6">
        <article className="flex flex-col gap-2">
          <div className="aspect-video bg-gray-100 w-full rounded"></div>
          <span className="">
            <p className="text-sm">Date</p>
            <h1 className="line-clamp-1">
              Title untuk article ini adalah . . .
            </h1>
          </span>
        </article>
        <ArticleCard />
      </div>
    </section>
  );
};

export default LatestArticles;
