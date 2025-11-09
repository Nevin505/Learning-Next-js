import NewsList from "@/components/newsList";
import { DUMMY_NEWS } from "@/dummy";
import { notFound } from "next/navigation";
import React from "react";

const NewsId = async ({ params }) => {
  const { newsId } = await params;
  const newsItem = DUMMY_NEWS.find((news) => news.slug == newsId);
  if (!newsItem) {
    return notFound()
  }
  return (
      <NewsList newsItem={newsItem}/>
  );
};

export default NewsId;
