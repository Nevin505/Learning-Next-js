const UserProfile = ({ name }) => {
  return <div>UserProfile {name}</div>;
};
export default UserProfile;

export const getServerSideProps = async ({req,res,params}) => {
  console.log("teh context", params);
  return {
    props: {
      name: "Nevin",
    },
  };
};
