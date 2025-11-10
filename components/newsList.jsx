import Link from "next/link";

const NewsList = ({ newsItem }) => {
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
};

export default NewsList;
