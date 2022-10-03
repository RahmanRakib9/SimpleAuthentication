import React from "react";
import congrats from "../src/assets/minions.gif";

const FinalPage = () => {
  return (
    <div className="flex justify-center items-center">
      <img style={{height:'300px',width:'400px'}} src={congrats} alt="" />
    </div>
  );
};

export default FinalPage;
