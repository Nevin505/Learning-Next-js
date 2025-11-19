import { useRouter } from "next/router";

const DynamicValues = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>DynamicValues in portfolio{id}</div>;
};

export default DynamicValues;
