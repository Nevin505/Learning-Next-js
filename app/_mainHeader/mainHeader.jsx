import Link from "next/link";

const MainHeader = () => {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">Next News</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
