import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase/firebase.config";

const Google = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  // reload the page if an error occur
  const relodeWindow = () => {
    window.location.reload();
  };

  // if user sign in successfully then navigate them
  if (user) {
    navigate("/finalPage");
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
        onClick={() => signInWithGoogle()}
      >
        Sign In With Google
      </button>
    </div>
  );
};

export default Google;
