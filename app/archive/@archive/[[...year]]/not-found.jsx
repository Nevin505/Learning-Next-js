import { getAvailableNewsYears } from "@/lib/dummy";
import Link from "next/link";
import React from "react";

const NotFound = () => {
    const newsYear = getAvailableNewsYears();
  return (
    <div>
      <header id="archive-header">
        <ul>
          {newsYear.map((singleNews) => {
            return (
              <li key={singleNews}>
                <Link href={`/archive/${singleNews}`}>{singleNews} </Link>
              </li>
            );
          })}
        </ul>
      </header>
      NotFOund
    </div>
  );
};

export default NotFound;
