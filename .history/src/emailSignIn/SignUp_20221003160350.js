import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";

const SignUp = () => {
  // react firebase hook for create user with email
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  //react hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //create user when form submit successfully
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
  };

  // reload the page if an error occur
  const relodeWindow = () => {
    window.location.reload();
  };

  //

  return (
    <section className="flex justify-center items-center h-screen">
      <div>
        <div className="text-center">
          <h1 className="mb-7 font-bold">Create a New Account</h1>
          <h4 className="mb-3">Sign up with your email and a password.</h4>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* email field start from here */}
          <div className="form-control w-full max-w-xs">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
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

          {/* if loading */}
          {loading ? (
            <p className="text-primary text-center mb-3">Processing.....</p>
          ) : (
            ""
          )}

          {/* if an error */}
          {error ? (
            <p>
              <p className="text-red-500 hover:underline">
                {error?.message}{" "}
                <Link to="/" onClick={relodeWindow}>
                  Go back
                </Link>
              </p>
            </p>
          ) : (
            ""
          )}

          <input type="submit" className="btn btn-primary w-full" />
        </form>
        <p className="mt-2 hover:underline ">
          <Link to="/login">Already Have An Account?Please Sign In</Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
