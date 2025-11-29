import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser } = useAuth();

  const handleRegistration = (data) => {
    // console.log(data);
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl py-4">
      <h1 className="text-3xl font-semibold text-center">
        Welcome to Zap-Shift
      </h1>
      <p className="font-medium text-center">Pleast Register</p>
      <form onSubmit={handleSubmit(handleRegistration)} className="card-body">
        <fieldset className="fieldset w-full">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500 font-bold">Email is required</p>
          )}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/,
            })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500 font-bold">password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500 font-bold">
              Password must be 6 cheracters
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500 font-bold">
              Password bust be includes at least one charecter, at least one
              number and at least one speacial character
            </p>
          )}
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
      <SocialLogin></SocialLogin>
      <p className="text-center">
        Already have an account plaest?{" "}
        <Link to="/login" className="text-blue-800 font-medium">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
