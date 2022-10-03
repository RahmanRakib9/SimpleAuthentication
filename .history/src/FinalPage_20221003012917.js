import React from "react";
import congrats from "../src/assets/minions.gif";

const FinalPage = () => {
  return (
    <section>
    <div>
        <h1>congtas</h1>
    </div>
      <div >
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
