"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, navLink }) => {
  const pathName = usePathname();
  console.log("pathName", pathName);

  return (
    <div>
      <Link
        href={href}
        className={pathName.startsWith(href) ? " active" : undefined}
      >
        {navLink}
      </Link>
    </div>
  );
};

export default NavLink;
