import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "./SocialLogin";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser, userUpdateProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegistration = (data) => {
    // console.log("after login", data.photo[0]);
    const imageProfile = data.photo[0];
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        // Store the image and get the photo url
        const formData = new FormData();
        formData.append("image", imageProfile);
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host_key
        }`;
        axios.post(image_API_URL, formData).then((res) => {
          console.log("after upload image", res.data.data.url);

          // update user profile
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          userUpdateProfile(userProfile).then(() => {
            console.log("user profile update done");
            navigate(location?.state || "/");
          });
        });
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
          {/* Name field */}
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input"
            placeholder="name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500 font-bold">Name is required</p>
          )}
          {/* Image */}
          <label className="label">Photo</label>
          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input"
            placeholder="photo"
          />
          {errors.photo?.type === "required" && (
            <p className="text-red-500 font-bold">Photo is required</p>
          )}
          {/* Email field */}
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
          {/* Password field */}
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
        <Link
          state={location.state}
          to="/login"
          className="text-blue-800 font-medium"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
