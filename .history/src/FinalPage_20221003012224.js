import React from "react";
import congrats from "../src/assets/minions.gif";

const FinalPage = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <h1>Congrats!You have successfully signed into this App</h1>

      <img style={{ height: "300px", width: "400px" }} src={congrats} alt="" />
    </div>
  );
};

export default FinalPage;
