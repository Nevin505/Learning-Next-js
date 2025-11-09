import { DUMMY_NEWS } from "@/dummy";
import Image from "next/image";
import React from "react";

const ImageView = async ({ params }) => {
  const { newsId } = await params;
  console.log("the sludss", newsId);

  const newsItem = DUMMY_NEWS.find((news) => news.slug == newsId);
  console.log("newsItemIUMagewssssss", newsItem.image);

  return (
    <div className="fullscreen-image">
      <img  src={`/images/news/${newsItem.image}`} />
    </div>
  );
};

export default ImageView;
