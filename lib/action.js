"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import slug from "slug";

const fs = require("fs");
const db = require("better-sqlite3")("meals.db");

const isTextValid = (text) => {
  return !text.trim() || !text;
};
export async function shareMeal(currentState,formData) {
  console.log("sharing the meal",);
  const name = formData.get("name");
  const email = formData.get("email");
  const title = formData.get("title");
  const summary = formData.get("summary");
  const instructions = formData.get("instructions");
  const image = formData.get("image");
  const meal = { name, email, title, summary, instructions, image };
  console.log("the form data", meal);
  const imageExtemnsion = image.name.split(".").pop();
  const imaheName = `${title}.${imageExtemnsion}`;
  const savedPath = "/public/";
  if (
    isTextValid(email) ||
    isTextValid(title) ||
    isTextValid(summary) ||
    isTextValid(instructions) ||
    isTextValid(name) ||
    !email.includes("@") ||
    image.size < 0
  ) {
    return {
      message:'Invalid Input'
    }
  }
  const imafgeDataBuffer = await image.arrayBuffer();
  const buffer = Buffer.from(imafgeDataBuffer);

  await fs.writeFile("public/images/" + image.name, buffer, (err) => {
    if (err) {
      console.error("Error saving image:", err);
    } else {
      console.log("Image saved successfully!");
    }
  });
  meal.slug = slug(meal.title, { lower: true });

  meal.image = "/images/" + image.name;
  console.log("the meak", meal);
  const insertData = await db
    .prepare(
      `Insert into meals (slug,title,image,summary,instructions,creator,creator_email) values (@slug,@title,@image,@summary,@instructions,@name,@email)`
    )
    .run(meal);
  revalidatePath('/meals','layout');
  redirect("/meals");
}
