import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = () => {
   navigate("reset-password")
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-white lg:!-bg--clr-primar-light py-8">
      <div className="bg-white px-4 lg:px-8 py-8 md:rounded-2xl md:shadow-xl max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Forgot Password
        </h2>
        <p className="text-center text-base text-gray-600 mb-6">
          Enter your email address to reset your password
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-800 font-semibold" htmlFor="email">
              Email address <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="w-full text-sm px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-1 focus:-ring--clr-primary outline-none"
              placeholder="Enter your email address"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full -bg--clr-primary text-white py-2 rounded-md hover:bg-white hover:border hover:shadow-md hover:-border--clr-primary hover:!-text--clr-secondary transition-colors"
          >
            Confirm Email
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            Remember your password?{" "}
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

export default ForgotPassword;
