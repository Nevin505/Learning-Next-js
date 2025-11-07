import Image from "next/image";
import Link from "next/link";
import React from "react";

import MainHeaderBackGround from "./mainHeaderBackGround";
import Navlinks from "./navlinks";

import styles from "./mainHeader.module.css";
const MainHeader = () => {
  return (
    <>
      <MainHeaderBackGround />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={200}
            height={200}
            priority
          />
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <Navlinks href="/meals"> Meals</Navlinks>
            <Navlinks href="/community">Community</Navlinks>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
