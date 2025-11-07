"use client";
import { usePathname } from "next/navigation";
import styles from "./mainHeader.module.css";
import Link from "next/link";
const Navlinks = ({ href, children }) => {
  const pathName = usePathname();
  console.log("tyhe href",href);
  
  return (
    <li>
      <Link
        href={href}
        className={`${pathName.startsWith(href) ? styles.active : " "}`}
      >
        {children}
      </Link>
    </li>
  );
};

export default Navlinks;
