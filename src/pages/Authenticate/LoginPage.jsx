import React, { useContext } from "react";
import { Link } from "react-router-dom"; 

import { MdOutlineCancel } from "react-icons/md"; 
import AuthContext from "../../context/AuthContext";

const LoginPage = () => {
  let {loginUser} = useContext(AuthContext);
 
  return (
    <div className="bg-purple-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between">
          <h2 className="text-lg font-medium mb-4">Login</h2>
          <Link to={"/"}>
            <MdOutlineCancel className="" />
          </Link>
        </div>
        <form onSubmit={loginUser}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Username</label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            // value={username}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            // value={password}

          />
        </div>
        <div className="flex justify-between">
          <button className="bg-[#a359a0] rounded-full text-white py-2 px-4 hover:bg-purple-700" type="submit">
            Login
          </button>
          {/* <Link className="bg-[#a359a0] rounded-full text-white py-2 px-4 hover:bg-purple-700" to={"/signup"}>
            Signup
          </Link> */}
        </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;