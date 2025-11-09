import Link from "next/link";
import React from "react";
import { DUMMY_NEWS } from "@/dummy";
const page = async () => {
  const result=await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hio") 
     },5000)
  })
  console.log("the resul",result);
  
  const response = await fetch("http://localhost:8080/news");
  const news = await response.json();
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
