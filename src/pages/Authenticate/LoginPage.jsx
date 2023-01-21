import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";

const LoginPage = () => {
  return (
    <div className="bg-purple-500 min-h-screen flex items-center justify-center">
      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between">
          <h2 className="text-lg font-medium mb-4">Login</h2>
          <Link to={"/"}>
            <MdOutlineCancel className="" />
          </Link>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <button className="bg-[#a359a0] rounded-full text-white py-2 px-4 hover:bg-purple-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
