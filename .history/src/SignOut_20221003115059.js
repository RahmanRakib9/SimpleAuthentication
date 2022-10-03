import React from "react";
import { getAuth, signOut } from "firebase/auth";
import auth from "./firebase/firebase.config";


const SignOut = () => {
  const logout = () => {
    signOut(firebaseAuth);
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
