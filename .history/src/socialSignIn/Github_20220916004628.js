import React from "react";
import { useSignInWithGithub } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
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

  // if an error
  if (error) {
    return (
      <p className="text-red-500 hover:underline">
        {error?.message}{" "}
        <Link to="/" onClick={relodeWindow}>
          Go back
        </Link>
      </p>
    );
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

export default {Github,relodeWindow};
