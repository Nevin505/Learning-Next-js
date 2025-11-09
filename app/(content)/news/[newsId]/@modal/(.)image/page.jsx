"use client";
import { DUMMY_NEWS } from "@/dummy";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ImageView =  ({ params }) => {
  const route = useRouter();
  const { newsId } =  params;
  console.log("the sludss", newsId);
   
  const newsItem = DUMMY_NEWS.find((news) => news.slug == newsId);
  console.log("newsItemIUMagew", newsItem.image);

  const goBackHandler = () => {
    route.back()
  }

  return (
    <>
      <div className="modal-backdrop" onClick={goBackHandler}>
        <dialog className="modal" open>
          <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} />
          </div>
        </dialog>
      </div>
    </>
  );
};

export default ImageView;
