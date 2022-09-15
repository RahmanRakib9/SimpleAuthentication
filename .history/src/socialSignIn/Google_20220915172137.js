import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase/firebase.config";

const Google = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (user) {
    console.log(user);
  }
  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>{error?.message && <br/> <Link>Go back</Link>}</p>;
  }

  return (
    <div>
      <button
        className="btn btn-primary w-full mt-3"
        onClick={() => signInWithGoogle()}
      >
        Sign In With Google
      </button>
    </div>
  );
};

export default Google;
