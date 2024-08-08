import Login from "@/components/auth/Login";
import Link from "next/link";
import React from "react";

const login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full md:w-[550px] rounded-xl px-10 py-5 bg-white shadow-md ">
        <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-800 text-transparent bg-clip-text">
          Clash
        </div>
        <div className="text-3xl font-bold">
          <p>Welcome back</p>
        </div>
        <Login />
        <p className="text-center mt-2">
          Don't have an account?
          <strong>
            <Link href="/register"> Register</Link>
          </strong>
        </p>
      </div>
    </div>
  );
};

export default login;
