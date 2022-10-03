import React from "react";
import auth from "./firebase/firebase.config";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebaseApp);


const SignOut = () => {

  const logout = () => {
    signOut(auth);
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
