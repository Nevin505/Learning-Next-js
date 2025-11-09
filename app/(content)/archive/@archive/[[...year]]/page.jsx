import NewsList from "@/components/newsList";
import { DUMMY_NEWS } from "@/dummy";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYearAndMonth,
} from "@/lib/dummy";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const FilterNewsPage = async ({ params }) => {
  const { year } = await params;
  const selectedYear = year?.[0];
  const selecteMOnth = year?.[1];
  let newsYear = getAvailableNewsYears();

  console.log("the yeart", year);
  let findNews = [];
  // if (selectedYear && !getAvailableNewsYears().includes(Number(selectedYear))) {
  //   // notFound();
  //   throw new Error("Error");
  // }
  if (selectedYear) {
    findNews = DUMMY_NEWS.filter(
      (singleNews) => new Date(singleNews.date).getFullYear() == selectedYear
    );
    newsYear = getAvailableNewsMonths(selectedYear);
  }
  if (selecteMOnth) {
    findNews = getNewsForYearAndMonth(selectedYear, selecteMOnth);
    console.log("findNewsinside", findNews);
  }
  if (findNews.length == 0) {
    notFound();
  }

  return (
    <>
      <header id="archive-header">
        <ul>
          {newsYear.map((singleNews) => {
            let link = selectedYear
              ? `/archive/${selectedYear}/${singleNews}`
              : `/archive/${selectedYear}`;
            return (
              <li key={singleNews}>
                <Link href={link}>{singleNews} </Link>
              </li>
            );
          })}
        </ul>
      </header>
      {findNews.length > 0 &&
        findNews.map((news) => {
          return <NewsList newsItem={news} />;
        })}
      ;
    </>
  );
};

export default FilterNewsPage;
