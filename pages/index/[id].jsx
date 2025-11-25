import fs from "fs/promises";
import path from "path";

const DynamicProps = (props) => {
  if (!props || !props.product) {
    return <div>Product not found</div>;
  }
  
  return (
    <div>
      <h1>DynnamicProps {props.id}</h1>
      <h2>{props.product.title}</h2>
      <p>{props.product.description}</p>
    </div>
  );
};
export async function getStaticProps(context) {
  try {
    console.log("the cometcs", context);
    
    if (!context.params || !context.params.id) {
      console.error("Missing params or id");
      return { notFound: true };
    }
    
    const filePAth = path.join(process.cwd(), "data", "backend.json");
    console.log("Reading file from:", filePAth);
    
    const fileContent = await fs.readFile(filePAth, "utf-8");
    const fileData = JSON.parse(fileContent);
    
    if (!fileData.products || !Array.isArray(fileData.products)) {
      console.error("Invalid data structure");
      return { notFound: true };
    }
    
    const product = fileData.products.find((p) => p.id === context.params.id);
    
    if (!product) {
      console.log("Product not found for id:", context.params.id);
      return { notFound: true };
    }
    
    return { 
      props: {
        id: context.params.id,
        product: product
      }
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    console.error("Error stack:", error.stack);
    return { notFound: true };
  }
}
export const getStaticPaths = async () => {
  try {
    const filePAth = path.join(process.cwd(), "data", "backend.json");
    const fileContent = await fs.readFile(filePAth, "utf-8");
    const fileData = JSON.parse(fileContent);
    console.log("fileData 133", fileData);
    const pathsss = fileData.products.map((idVAlue) => {
      return { params: { id: idVAlue.id } };
    });
    console.log("the oaths", pathsss);

    return {
      paths: pathsss,
      fallback: 'blocking',
    };
  } catch (error) {
    console.error("Error in getStaticPaths:", error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
};
export default DynamicProps;
