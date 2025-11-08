import NewsList from "@/components/newsList";
import { DUMMY_NEWS } from "@/dummy";
import { notFound } from "next/navigation";
import React from "react";

const FilterNewsPage = async ({ params }) => {
  const { year } = await params;
  const findNews = DUMMY_NEWS.find(
    (singleNews) => new Date(singleNews.date).getFullYear() == year
  );
  console.log("findNews", findNews);
  if (!findNews) {
    notFound();
  }

  return <NewsList newsItem={findNews} />;
};

export default FilterNewsPage;
