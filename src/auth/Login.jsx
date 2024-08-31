import React from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible , AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen lg:-bg--clr-primar-light py-8">
      <div className="bg-white px-4  lg:px-8  py-8 md:rounded-2xl md:shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold -text--clr-secondary text-center lg:text-left ">Login to account</h2>
        <p className="text-center lg:text-left text-base text-gray-600 mb-6">Enter your email & password to login</p>
        <form>
          <div className="mb-4">
            <label className="block -text--clr-secondary font-semibold" htmlFor="email">
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
            <label className="block -text--clr-secondary font-semibold" htmlFor="password">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              className="w-full text-sm px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-1 focus:-ring--clr-primary outline-none"
              placeholder="Enter your password"
            />
            <AiOutlineEyeInvisible  className="absolute top-10 right-3 text-gray-500 cursor-pointer" size={20} />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 -text--clr-primary border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="remember" className="ml-2 text-gray-600 text-sm">
                Keep me signed in
              </label>
            </div>
            <a href="#" className="-text--clr-primary text-sm hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
        <div className="flex items-center justify-center mt-6">
          {/* <div className="border-t border-gray-300 w-full"></div> */}
          <p className="text-gray-600 px-2 text-sm w-full text-center">Or continue with social account</p>
          {/* <div className="border-t border-gray-300 w-full"></div> */}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <button className="flex items-center text-sm px-4 py-2 font-bold border border-gray-300 rounded-lg hover:bg-gray-100">
            <FcGoogle size={30} className="mr-2" />
            Sign in with Google
          </button>
          <button className="w-full flex items-center text-sm px-4 py-2 font-bold border border-gray-300 rounded-lg hover:bg-gray-100">
            <AiFillFacebook size={30} className="mr-2 text-blue-600" />
            <span className='w-max'>Sign in with Facebook</span>
          </button>
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            You don't have an account yet?{' '}
            <a href="#" className="-text--clr-primary hover:underline">
              Register Now
            </a>
          </p>
        </div>
      </div>
      <p className='text-sm -text--clr-light-gray hidden lg:visible'>Copyright © 2024 Furniro, All rights reserved.</p>
    </div>
  );
};

export default Login;
