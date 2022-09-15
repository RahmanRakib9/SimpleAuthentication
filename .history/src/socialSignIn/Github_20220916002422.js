import React from "react";
import { useSignInWithGithub } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";

const Github = () => {
  const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);

  // reload the page if an error occur
  const relodeWindow = () => {
    window.location.reload();
  };

  // if user sign in successfully
  if (user) {
    console.log(user);
  }

  // if Processing
  if (loading) {
    return <p className="text-primary">Processing.....</p>;
  }

  return (
    <div>
      <button
        className="btn btn-primary w-full mt-3"
        onClick={() => signInWithGithub()}
      >
        Sign In With GitHub
      </button>
    </div>
  );
};

export default Github;
