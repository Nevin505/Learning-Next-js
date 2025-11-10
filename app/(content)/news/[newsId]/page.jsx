import NewsList from "@/components/newsList";
import { DUMMY_NEWS } from "@/dummy";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const NewsId = async ({ params }) => {
  const { newsId } = await params;
  const newsItem = DUMMY_NEWS.find((news) => news.slug == newsId);
  console.log("newsItem again",newsItem);
  
  if (!newsItem) {
    return notFound()
  }
  return (
     <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
      // <NewsList newsItem={newsItem}/>
  );
};

export default NewsId;
