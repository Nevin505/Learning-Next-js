import Link from "next/link";
import React from "react";
import { DUMMY_NEWS } from "@/dummy";
import { getAllNews } from "@/lib/dummy";
const page = async () => {

  const news = getAllNews();
  console.log("the news inside",news);
  
  return (
    <div>
      <ul className="news-list">
        {news.map((news) => {
          return (
            <li key={news.id}>
              <Link href={`news/${news.slug}`}>
                <img src={`/images/news/${news.image}`} alt={news.title} />
                <span>{news.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// export default NewsList;

export default page;
