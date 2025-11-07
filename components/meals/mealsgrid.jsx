import React from "react";
import mealGridStyle from "./mealsgrid.module.css";
import MealItem from "./mealItem";
const MealsGrid = ({ meals }) => {
  return (
    <ul className={mealGridStyle.meals}>
      {meals.map((singleMeals) => {
        return <li key={singleMeals.id}>{<MealItem  {...singleMeals}/>}</li>;
      })}
    </ul>
  );
};

export default MealsGrid;
