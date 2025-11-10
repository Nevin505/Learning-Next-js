import sql from "better-sqlite3";
const db = sql("data.db");
// import { DUMMY_NEWS } from "@/dummy";

export function getAllNews() {
  return db.prepare("SELECT * from news").all();
}
export function getNewsItem(slug) {
  return db.prepare("Select * from news where slug = ?").get(slug);
}
// export function getLatestNews() {
//   return DUMMY_NEWS.slice(0, 3);
// }

export function getLatestNews() {
  return db.prepare("Select * from news Order by date DESC Limit 3").all();
}
// export function getAvailableNewsYears() {
//   return DUMMY_NEWS.reduce((years, news) => {
//     const year = new Date(news.date).getFullYear();
//     if (!years.includes(year)) {
//       years.push(year);
//     }
//     return years;
//   }, []).sort((a, b) => b - a);
// }

export function getAvailableNewsYears() {
  return db
    .prepare("Select DISTINCT strftime ('%Y', date) as year from news")
    .all()
    .map((year) => year.year);
}
// export function getAvailableNewsMonths(year) {
//   return DUMMY_NEWS.reduce((months, news) => {
//     const newsYear = new Date(news.date).getFullYear();
//     if (newsYear === +year) {
//       const month = new Date(news.date).getMonth();
//       if (!months.includes(month)) {
//         months.push(month + 1);
//       }
//     }
//     return months;
//   }, []).sort((a, b) => b - a);
// }

export function getAvailableNewsMonths(year) {
  return db
    .prepare(
      "Select DISTINCT strftime('%m',date) as month from news where strftime('%Y',date)= ? "
    )
    .all(year)
    .map((month) => month.month);
}
// export function getNewsForYear(year) {
//   return DUMMY_NEWS.filter(
//     (news) => new Date(news.date).getFullYear() === +year
//   );
// }
export function getNewsForYear(year) {
  return db
    .prepare("Select * from news where strftime('%Y',date) = ? Order BY date DESC")
    .all(year);
}
// export function getNewsForYearAndMonth(year, month) {
//   return DUMMY_NEWS.filter((news) => {
//     const newsYear = new Date(news.date).getFullYear();
//     const newsMonth = new Date(news.date).getMonth() + 1;
//     return newsYear === +year && newsMonth === +month;
//   });
// }
export async function getNewsForYearAndMonth(year, month) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news
}
// export function getNewsForYearAndMonth(year, month) {
//   return db
//     .prepare(
//       "Select * from news where strftime('%Y,date) = ? AND strftime('%m',date) = ? Order by date DESC "
//     )
//     .all(year, month);
// }
// function initDb() {
//   db.prepare(
//     'CREATE TABLE IF NOT EXISTS news (id INTEGER PRIMARY KEY, slug TEXT UNIQUE, title TEXT, content TEXT, date TEXT, image TEXT)'
//   ).run();

//   const { count } = db.prepare('SELECT COUNT(*) as count FROM news').get();

//   if (count === 0) {
//     const insert = db.prepare(
//       'INSERT INTO news (slug, title, content, date, image) VALUES (?, ?, ?, ?, ?)'
//     );

//     DUMMY_NEWS.forEach((news) => {
//       insert.run(news.slug, news.title, news.content, news.date, news.image);
//     });
//   }
// }
