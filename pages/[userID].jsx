// const UserID = ({ name }) => {
//   return <div>UserID {name}</div>;
// };
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const UserID = () => {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  console.log("the req", data);
  console.log("the req eror", error);
  if (isLoading) {
    return <p>Loading....</p>;
  }
return <div>HIii</div>
};
export default UserID;
