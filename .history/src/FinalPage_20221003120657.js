import React from "react";
import congrats from "../src/assets/minions.gif";

const FinalPage = () => {
  return (
    <section className="flex h-screen justify-center items-center">
      <div>
        <div className="">
          <h1 className="font-bold my-4 text-center">
            Congrats!You have successfully signed into this app
          </h1>
        </div>
        <div>
          <img
            style={{ height: "300px", width: "400px" }}
            src={congrats}
            alt=""
          />
        </div>
        {/* sign out */}
        <div className="my-4">
          <Si
        </div>
      </div>
    </section>
  );
};

export default FinalPage;
