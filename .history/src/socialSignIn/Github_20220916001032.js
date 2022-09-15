import React from "react";
import { useSignInWithGithub } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";

const Github = () => {
  const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);

  if (user) {
    console.log(user);
  }
  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  console.log(object);

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
