import { DUMMY_NEWS } from "@/dummy";
import { getAvailableNewsYears } from "@/lib/dummy";
import Link from "next/link";
import React from "react";

const ArchivePage = () => {
  const newsYear = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <ul>
        {newsYear.map((singleNews) => {
          return <li key={singleNews}>
            <Link href={`/archive/${singleNews}`}>{singleNews} </Link>
          </li>;
        })}
      </ul>
    </header>
  );
};

export default ArchivePage;
