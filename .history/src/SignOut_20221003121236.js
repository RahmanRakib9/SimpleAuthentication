import React from "react";
import { getAuth, signOut } from "firebase/auth";
import auth from "./firebase/firebase.config";

const SignOut = () => {
  // const fAuth = getAuth(auth);

  const logout = () => {
    signOut();
  };

  return (
    <div>
      <button className="btn btn-primary w-full mt-3" onClick={logout}>
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;
