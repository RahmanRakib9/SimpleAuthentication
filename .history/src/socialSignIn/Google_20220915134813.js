import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";

const Google = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


  return (
    <div>
      <button className="btn btn-primary w-full mt-3" onClick={()=}>
        Sign In With Google
      </button>
    </div>
  );
};

export default Google;
