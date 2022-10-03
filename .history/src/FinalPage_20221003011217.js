import React from "react";
import congrats from "../src/assets/minions.gif";

const FinalPage = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <img style={{height:'400px',width:'600px'}} src={congrats} alt="" />
    </div>
  );
};

export default FinalPage;
