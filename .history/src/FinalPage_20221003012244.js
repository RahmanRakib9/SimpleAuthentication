import React from "react";
import congrats from "../src/assets/minions.gif";

const FinalPage = () => {
  return (
    <section>
      <div className="flex h-screen justify-center items-center">
        <img
          style={{ height: "300px", width: "400px" }}
          src={congrats}
          alt=""
        />
      </div>
    </section>
  );
};

export default FinalPage;
<h1>Congrats!You have successfully signed into this App</h1>;
