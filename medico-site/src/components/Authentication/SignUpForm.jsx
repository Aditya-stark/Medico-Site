import React from "react";
import logo from "../../assets/images/logo.png";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SignUpForm() {
  return (
    <div className="flex items-center justify-center p-4 sm:p-0 min-h-[80vh] sm:min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-2xl sm:rounded-3xl p-8 max-w-md w-full sm:w-4/5">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} className="w-[150px] sm:w-[200px]" />
          <p className="text-gray-600 text-sm sm:text-lg mt-1">
            Create your free medica account
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          {/* Full Name */}
          <div className="mb-4">
            <label
              htmlFor="fullname"
              className="block text-base font-medium text-black"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Your Name"
              className="mt-1 px-3 py-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-mainCyan"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-base font-medium text-black"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="mt-1 px-3 py-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-mainCyan"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-base font-medium text-black"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Your Password"
              className="mt-1 px-3 py-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-mainCyan"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 flex items-center justify-center"
          >
            <FaPaperPlane className="mr-1" />
            Register
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to={"/login"} className="text-mainCyan hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
