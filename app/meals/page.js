import React, { Suspense } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/mealsgrid";
import { getMeals } from "@/lib/meals";
import LoadingState from "./loading";

export const metadata = {
  title: "All Meals",
  description: "A list of all the delicious meals you and others have shared!",
}

const GetMealsData = async() => {
  const meals = await getMeals();
  console.log("the melas",meals);
  
  return <MealsGrid meals={meals} />
    
}
const MealsPage =  () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals,created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose ypur favourite recipe and cook it yourself.It is easy and fun!s
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your favourite REcipe</Link>
        </p>
      </header>
        <main className={styles.main}>
      <Suspense fallback={  <p >loading....</p>}>
          <GetMealsData/>
      </Suspense>
        </main>
    </>
  );
};

export default MealsPage;
