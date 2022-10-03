import React from "react";
import congrats from "../src/assets/minions.gif";

const FinalPage = () => {
  return (
    <section className="flex h-screen justify-center items-center">
      <div>
        <div>
          <h1 className="font-bold my-4">
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
        <button
          className="btn btn-primary w-full mt-3"
          
        >
          Sign Out
        </button>
      </div>
    </section>
  );
};

export default FinalPage;
