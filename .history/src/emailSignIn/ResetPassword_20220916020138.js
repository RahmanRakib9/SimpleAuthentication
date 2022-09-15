import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../firebase/firebase.config";

const ResetPassword = () => {
  // react firebase hook for create user with email
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  //react hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //create user when form submit successfully
  const onSubmit = (data) => {
    console.log(data);
  };

  // reload the page if an error occur
  const relodeWindow = () => {
    window.location.reload();
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <div>
        <div className="text-center">
          <h1 className="mb-7 font-bold">Reset Your Password</h1>
          <h4 className="mb-3">To Reset your Password,enter the email address you use to sign in</h4>
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
              placeholder="Email"
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

          <input type="submit" className="btn btn-primary w-full" />
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
