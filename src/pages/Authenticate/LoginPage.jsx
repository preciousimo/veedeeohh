import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import { MdOutlineCancel } from "react-icons/md";

import Connect from "../../services/Connect";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useCookies(["mytoken"])

  let navigate  = useNavigate()

  useEffect(() => {
    if(token['mytoken']) {
      navigate('/');
    }
  }, [token, navigate])


  const LoginBtn = () => {
    Connect.login({ username: username, password: password })
    .then(resp => setToken('mytoken', resp.token))
    .catch(error => console.log(error))
 
  };

  return (
    <div className="bg-purple-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between">
          <h2 className="text-lg font-medium mb-4">Login</h2>
          <Link to={"/"}>
            <MdOutlineCancel className="" />
          </Link>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Username</label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={ e => setUsername(e.target.value)}
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
            placeholder="Enter your password"
            value={password}
            onChange={ e => setPassword(e.target.value)}

          />
        </div>
        <div className="flex justify-between">
          <button className="bg-[#a359a0] rounded-full text-white py-2 px-4 hover:bg-purple-700" onClick={LoginBtn}>
            Login
          </button>
          <Link className="bg-[#a359a0] rounded-full text-white py-2 px-4 hover:bg-purple-700" to={"/signup"}>
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
