import Image from "next/image";
import pageStyles from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export async function generateMetadata({ params,serachParams },parent) {
  const slugs = await params.slug;
  const meal =await getMeal(slugs);
  if (!meal) {
    notFound()
  }

   console.log("the meal in metadatasss",meal);
   
  return {
    title: meal ? meal.title : "Meal NOt Found",
    description: meal ? meal.summary : "No meal  Description was Found"
  }
}
const MealsDynamicRoute = async({ params }) => {
  const { slug } = params;
  console.log("the slug",slug);
  
  const meal = await getMeal(slug);
  if (!meal) {
     notFound()
  }
  console.log("the measl",meal);
   const instructions=meal.instructions.replace(/\n/g,'<br/>')
  return (
    <>
      <header className={pageStyles.header}>
        <div className={pageStyles.image}>
          <Image fill src={meal.image}/>
        </div>
        <div className={pageStyles.headerText}>
          <h1>{ meal.title}</h1>
          <p className={pageStyles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{ meal.creator}</a>
          </p>
          <p className={pageStyles.summary}>{ meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={pageStyles.instructions}
          dangerouslySetInnerHTML={{ __html: instructions}}
        ></p>
      </main>
    </>
  );
};

export default MealsDynamicRoute;
