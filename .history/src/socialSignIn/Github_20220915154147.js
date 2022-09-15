import React from "react";
import { useSignInWithGithub } from "react-firebase-hooks/auth";

const Github = () => {
  const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);

  return (
    <div>
      <button className="btn btn-primary w-full mt-3">
        Sign In With GitHub
      </button>
    </div>
  );
};

export default Github;
