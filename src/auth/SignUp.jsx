import React, { useState } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillFacebook,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-white lg:-bg--clr-primar-light py-8">
      <div className="bg-white px-4 lg:px-8 py-8 md:rounded-2xl md:shadow-xl max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Create your account
        </h2>
        <p className="text-center text-base text-gray-600 mb-6">
          Enter your personal details to create an account
        </p>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-800 font-semibold" htmlFor="firstName">
                First name <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full text-sm px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-1 focus:-ring--clr-primary outline-none"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold" htmlFor="lastName">
                Last name <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full text-sm px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-1 focus:-ring--clr-primary outline-none"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 font-semibold" htmlFor="email">
              Email address <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="w-full text-sm px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-1 focus:-ring--clr-primary outline-none"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-800 font-semibold" htmlFor="password">
              Password <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full text-sm px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-1 focus:-ring--clr-primary outline-none"
              placeholder="Enter your password"
            />
            {showPassword ? (
              <AiOutlineEye
                className="absolute top-10 right-3 text-gray-500 cursor-pointer"
                size={20}
                onClick={togglePasswordVisibility}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute top-10 right-3 text-gray-500 cursor-pointer"
                size={20}
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-800 font-semibold" htmlFor="confirmPassword">
              Confirm password <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              className="w-full text-sm px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-1 focus:-ring--clr-primary outline-none"
              placeholder="Enter your password"
            />
            {showConfirmPassword ? (
              <AiOutlineEye
                className="absolute top-10 right-3 text-gray-500 cursor-pointer"
                size={20}
                onClick={toggleConfirmPasswordVisibility}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute top-10 right-3 text-gray-500 cursor-pointer"
                size={20}
                onClick={toggleConfirmPasswordVisibility}
              />
            )}
          </div>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="agree"
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:-ring--clr-primary"
            />
            <label htmlFor="agree" className="ml-2 text-gray-600 text-sm">
              Agree with Privacy Policy
            </label>
          </div>
          <button
            type="submit"
            className="w-full -bg--clr-primary text-white py-2 rounded-md hover:bg-white hover:border hover:shadow-md hover:-border--clr-primary hover:!-text--clr-secondary transition-colors"
          >
            Sign Up
          </button>
        </form>
        <div className="flex items-center justify-center mt-6">
          <p className="text-gray-600 px-2 text-sm w-full text-center">
            Or continue with social account
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <button className="flex items-center text-sm px-4 py-2 font-bold border border-gray-300 rounded-lg hover:bg-gray-100">
            <FcGoogle size={30} className="mr-2" />
            Sign in with Google
          </button>
          <button className="w-full flex items-center text-sm px-4 py-2 font-bold border border-gray-300 rounded-lg hover:bg-gray-100">
            <AiFillFacebook size={30} className="mr-2 text-blue-600" />
            <span className="w-max">Sign in with Facebook</span>
          </button>
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            You have an account?{" "}
            <a href="/" className="-text--clr-primary hover:underline">
              Login Now
            </a>
          </p>
        </div>
      </div>
      <p className="text-sm text-gray-400 mt-6 hidden lg:visible">
        Copyright © 2024 Furniro, All rights reserved.
      </p>
    </div>
  );
};

export default SignUp;
