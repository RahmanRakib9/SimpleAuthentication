import React from "react";
import { getAuth, signOut } from "firebase/auth";
import auth from "./firebase/firebase.config";

const SignOut = () => {
  const fAuth = getAuth(auth);

  

  return (
    <div>
      <button className="btn btn-primary w-full mt-3">Sign Out</button>
    </div>
  );
};

export default SignOut;
