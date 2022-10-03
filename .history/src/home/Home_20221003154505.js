import React from "react";
import { Link } from "react-router-dom";
import Email from "../socialSignIn/Email";
import Github from "../socialSignIn/Github";
import Google from "../socialSignIn/Google";
import Twitter from "../socialSignIn/Twitter";

const Home = () => {
  return (
    <section>
      <div className="flex h-screen justify-center items-center">
        <div className="text-center">
          <h1 className="mb-7 font-bold text-2xl">Welcome To My Simple Authentication System</h1>
          <h4>Sign Up With On Of The Following</h4>
          <Google></Google>
          {/* <Twitter></Twitter> */}
          <Github></Github>
          <Email></Email>
          <p className="mt-2 hover:underline ">
            <Link to="/login">Already Have An Account?Please Sign In</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
