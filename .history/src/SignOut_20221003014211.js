import React from "react";
import { getAuth, signOut } from "firebase/auth";
import auth from "./firebase/firebase.config";
import SignOut from './SignOut'

const SignOut = () => {
  const auth = getAuth(auth);

  const logout = () => {
    signOut(auth);
  };

  return (
    <div>
     <SignOut
    </div>
  );
};

export default SignOut;
