import fs from "fs/promises";
import path from "path";

// export const revalidate = 60
export async function getStaticProps(context) {
  console.log("context",context);
  
  const filePAth = path.join(process.cwd(), "/data/backend.json");

    const fileData = JSON.parse(await fs.readFile(filePAth));
    console.log("fileData 133",fileData);
    
  if (fileData.products.length==0) {
    return {notFound:true}
  }
  return {
    props: { posts :fileData.products},
    revalidate:90
  };
}
export default function indexPage({ posts }) {
  return posts?.length || 0;
}
