import { useRouter } from "next/router";

const cilentProject = () => {
    const router=useRouter()
    return <div>cilentProject {router.query.clientId } {router.query.cilentProject }</div>;
};

export default cilentProject;
