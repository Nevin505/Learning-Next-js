import { getNewsItem } from "@/lib/dummy";
import { notFound } from "next/navigation";
import React from "react";

const ImageView = async ({ params }) => {
  const { newsId } = await params;
  console.log("the newsId Parsm",newsId);
  
  const newsItem = getNewsItem(newsId);
  console.log("the newsItem gwerr",newsItem);
  
  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
};

export default ImageView;
