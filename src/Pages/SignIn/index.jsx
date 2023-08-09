// Utils
import { useState } from "react";

// Components
import Layout from "../../Components/Layout";
import LogIn from "./LogIn";
import SignUp from "./SignUp";


function SignIn() {
  const [renderLogin, setRenderLogin] = useState(true);

  const renderView = () => (renderLogin ? <LogIn setRenderLogin={setRenderLogin} /> : <SignUp />);
  return <Layout>{renderView()}</Layout>;
}

export default SignIn;
