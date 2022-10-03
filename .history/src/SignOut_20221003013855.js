import React from 'react';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from "./firebase/"


const SignOut = () => {
    const auth=getAuth(auth)
    return (
        <div>
            
        </div>
    );
};

export default SignOut;