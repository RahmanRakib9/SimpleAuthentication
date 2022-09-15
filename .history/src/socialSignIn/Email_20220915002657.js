import React from "react";
import { Link } from "react-router-dom";

const Email = () => {
  return (
    <div>
      <Link to='/register'>
        <button className="btn btn-primary w-full mt-3">
          Sign In With Email
        </button>
      </Link>
    </div>
  );
};

export default Email;
