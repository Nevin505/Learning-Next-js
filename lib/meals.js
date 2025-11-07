const db = require("better-sqlite3")("meals.db");
// const slugify = require("slugify");
const xss=require('xss')
export async function getMeals() {
  console.log("fetching measls");
  
  const query = "Select * from meals";
  const result = new Promise((resolve) => {
    // resolve(
    setTimeout(() => {
      const data = db.prepare(query).all();
      console.log("data",data);
      
      resolve(data);
    }, 1000);
    // );
  });
  return result;
}
// export async function DelteMeal() {
//   const query = "Delete from meals where id=8";
//   const result = new Promise((resolve) => {
//     // resolve(
//     setTimeout(() => {
//       const data = db.prepare(query).run();
//       console.log("data",data);
      
//       resolve(data);
//     }, 1000);
//     // );
//   });
//   return result;
// }
// DelteMeal()
export async function getMeal(slug) {
  const query = `Select * from meals where slug= ?`;
  const data = db.prepare(query).get(slug);
  console.log("the darta",data);
  
  return data;
}
//  id INTEGER PRIMARY KEY AUTOINCREMENT,
//        slug TEXT NOT NULL UNIQUE,
//        title TEXT NOT NULL,
//        image TEXT NOT NULL,
//        summary TEXT NOT NULL,
//        instructions TEXT NOT NULL,
//        creator TEXT NOT NULL,
//        creator_email TEXT NOT NULL
export async function saveMeal(meal) {
  //  = slug(meal.title, { lower: true });
  const saintisted = xss(meal.instructions);
  
  const insertData=`Insert into meals (slug,title,image,summary,instructions,creator,creator_email) values (slug,${meal.title},${meal.image},${meal.summary},${meal.instructions},${meal.creator},${meal.creator_email})`
}