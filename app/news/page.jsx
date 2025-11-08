import Link from "next/link";
import React from "react";
import { DUMMY_NEWS } from "@/dummy";
const page = () => {
  return (
    <div>
      <ul className="news-list">
        {DUMMY_NEWS.map((news) => {
          return <li key={news.id}>
            <Link href={`news/${news.slug}`}><img src={`/images/news/${news.image}`} alt={news.title} />
              <span>{ news.title}</span></Link>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default page;
