import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="w-full h-[728px] bg-gray-200 flex justify-center">
      <div className="flex justify-between bg-white w-[1000px] mt-30 h-[600px]">
        <div className="container-left-register">
          <h1 className="text-3xl font-bold text-sky-400 text-center pt-10">
            Hello Welcome Back!
          </h1>
          <img
            src="src/assets/image copy 47.png"
            alt=""
            className="w-[450px] h-[450px] mt-10"
          />
        </div>
        <div className="container-right-register bg-black w-[500px] h-[600px]">
          <h1 className="text-sky-400 text-3xl text-center font-bold  pt-10">
            Create an Account
          </h1>
          <div className="flex flex-col px-10 ">
            <label htmlFor="name" className="text-white pt-7 pb-3 ">
              Fullname
            </label>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Enter name"
                className="w-full border border-white text-white p-2 pr-10 rounded bg-transparent"
              />
              <i className="fa-solid fa-user-pen text-white absolute right-3 top-1/2 -translate-y-1/2"></i>
            </div>
            <label htmlFor="email" className="text-white pt-7 pb-3 ">
              Email
            </label>
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full border border-white text-white p-2 pr-10 rounded bg-transparent"
              />
              <i className="fa-solid fa-envelope text-white absolute right-3 top-1/2 -translate-y-1/2"></i>
            </div>
            <label htmlFor="password" className="text-white pt-7 pb-3">
              Password
            </label>
            <div className="relative w-full">
              <input type="password"
              placeholder="Enter password"
              className="w-full border border-white text-white p-2 pr-10 rounded bg-transparent" />
              <i class="fa-solid fa-lock text-white absolute right-3 top-3"></i>
            </div>
            <div className="py-5 flex gap-2">
              <input type="checkbox" className="w-[18px] " />
              <p className="text-white">I accept the <span className="text-sky-400">Terms and Conditions</span></p>
            </div>
            <button className="w-[150px] h-[50px] bg-sky-600 text-white rounded transform hover:scale-105 ">Register</button>
            <p className="text-white pt-5">Already have an account? <a href="/login" className="text-sky-400">Login here</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
