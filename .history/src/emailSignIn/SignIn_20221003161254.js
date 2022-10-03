import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";

const SignIn = () => {
  // react firebase hook for create user with email
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  
  //import navigate hook for naviga
  const navigate = useNavigate();

  //react hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //create user when form submit successfully
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  // if an error occur navigate the current page
  const navigatePage = () => {
    navigate("/finalPage");
  };

  // if user sign in successfully then navigate them into final page
  if (user) {
    navigate("/finalPage");
  }

  return (
    <section className="flex justify-center items-center h-screen">
      {/* <h1>Create a New Account</h1> */}
      <div>
        <div className="text-center">
          <h1 className="mb-7 font-bold">Sign In</h1>
          <h4 className="mb-3">Enter your email address and password.</h4>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* email field start from here */}
          <div className="form-control w-full max-w-xs">
            <input
              type="email"
              placeholder="Email"
              class="input input-bordered w-full max-w-xs"
              {...register("email", {
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "provide a valid email",
                },
                required: {
                  value: true,
                  message: "Email Required",
                },
              })}
            />
            {/* label for display email related errors */}
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>

          {/* password field */}
          <div className="form-control w-full max-w-xs">
            <input
              type="password"
              placeholder="Password"
              class="input input-bordered w-full max-w-xs"
              {...register("password", {
                minLength: {
                  value: 8,
                  message: "password must be 8 characters or long",
                },
                required: {
                  value: true,
                  message: "Password Required",
                },
              })}
            />
            {/* label for display password related errors */}
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>
          {/* forget password field */}
          <p className="mb-2 hover:underline text-center">
            <Link to="/resetPassword">Forgot your password?</Link>
          </p>

          {/* if loading */}
          {loading ? (
            <p className="text-primary text-center mb-3">Processing.....</p>
          ) : (
            ""
          )}

          {/* if an error */}
          {error ? (
            <p className="text-red-500 hover:underline mb-3">
              {error?.message}{" "}
              <Link to="/" onClick={navigatePage}>
                Go back
              </Link>
            </p>
          ) : (
            ""
          )}

          <input type="submit" className="btn btn-primary w-full" />
        </form>
        <p className="mt-2 hover:underline text-center">
          <Link to="/register">Don’t have an account yet? Sign up</Link>
        </p>
      </div>
    </section>
  );
};

export default SignIn;
