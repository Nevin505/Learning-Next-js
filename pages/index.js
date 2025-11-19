import Link from "next/link";
import { Fragment } from "react";

function HomePage(props) {
  return (
    <Fragment>
      <h1>the home page</h1>
      <ul>
        <li>
          <Link href="portfolio">portfolio page</Link>
        </li>
        <li>
          <Link href="about">about page</Link>
        </li>
        <li>
          <Link href="blog/1">blog page</Link>
        </li>
           <li>
          <Link href="client">client page</Link>
        </li>
      </ul>
    </Fragment>
  );
}


export default HomePage;
