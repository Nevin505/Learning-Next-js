import NewsList from "@/components/newsList";
import { getLatestNews } from "@/lib/dummy";
import Link from "next/link";
import React from "react";

const LatestPage = () => {
  const latesNews = getLatestNews();
  console.log("latesNews", latesNews);

  return (
    <div className="news-list">
      {latesNews.map((singleNews) => {
        return (
          <div key={singleNews.id}>
            <Link href={`news/${singleNews.slug}`}>
              <img src={`/images/news/${singleNews.image}`} alt={singleNews.title} />
              <span>{singleNews.title}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default LatestPage;
