import React from "react";
import congrats from "../src/assets/minions.gif";

const FinalPage = () => {
  return (
    <section className="flex h-screen justify-center items-center">
      <div>
        <di>
          <h1>Congrats!You have successfully signed into this app</h1>
        </di>
        <div>
          <img
            style={{ height: "300px", width: "400px" }}
            src={congrats}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default FinalPage;
