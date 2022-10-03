import React from "react";
import { getAuth, signOut } from "firebase/auth";
import auth from "./firebase/firebase.config";

const SignOut = () => {
  const auth = getAuth(auth);

  const logout = () => {
    signOut(auth);
  };

  return (
    <div>
      <button className="btn btn-primary w-full mt-3" onClick={log}>Sign Out</button>
    </div>
  );
};

export default SignOut;
