import Link from "next/link";
import NavLink from "./navLInks";

const MainHeader = () => {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">Next News</Link>
      </div>
      <nav>
        <ul>
          <li>
            {/* <Link href="/news">News</Link> */}
            <NavLink href="/news" navLink="News" />
          </li>
          <li>
            <NavLink href="/archive" navLink="Archive" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
