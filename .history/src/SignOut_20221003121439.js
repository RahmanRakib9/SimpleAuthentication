import React from "react";
import { getAuth, signOut } from "firebase/auth";
import auth from "./firebase/firebase.config";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate=useNavigate();
  // execute sign out method
  const logout = () => {
    signOut(auth);
    navigate
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
