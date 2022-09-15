import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

const Google = () => {
  return (
    <div>
      <button className="btn btn-primary w-full mt-3">
        Sign In With Google
      </button>
    </div>
  );
};

export default Google;