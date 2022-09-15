import React from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
const [signInWithGoogle, user, loading, error] = useSignInWithGoogle

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
