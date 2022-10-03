import React from "react";
import congrats from "../src/assets/minions.gif";

const FinalPage = () => {
  return (
    <se className="flex h-screen justify-center items-center">
      <h1>Congrats!You have successfully signed into this App</h1>
      <div>
        <img
          style={{ height: "300px", width: "400px" }}
          src={congrats}
          alt=""
        />
      </div>
    </se>
  );
};

export default FinalPage;
