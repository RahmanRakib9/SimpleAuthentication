import React from "react";
import congrats from "../src/assets/minions.gif";
import useSignInWithGoogle from '../..'

const FinalPage = () => {
    const [user]=useSignInWithGoogle;
  return (
    <div className="flex h-screen justify-center items-center">
        <h1></h1>
      <img style={{height:'300px',width:'400px'}} src={congrats} alt="" />
    </div>
  );
};

export default FinalPage;
