"use client";

import React, { useState } from "react";
import { AuthProps, login } from "./auth";
// import { useRouter } from "next/navigation";
import { decodeToken } from "../../utils/verify.utils";

const Login = ({ modalSetting, closeFunc, tokenSetter }: AuthProps) => {

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const close = () => {
    closeFunc();
  };

  const handleAuth = async () => {
    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      await login({ username, password});
      close();
      const token = String(localStorage.getItem('token'));
      decodeToken(token);
      tokenSetter();
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again later.");
    }
  };

  return (
    <dialog
      className={`fixed inset-0 z-10 flex items-center justify-center rounded-2xl text-white ${
        modalSetting ? "block" : "hidden"
      }`}
      aria-modal={true}
    >
      <div className="flex flex-col bg-gray-700 p-6 rounded-lg border-white border-2">
        <div className="flex flex-row items-center justify-between">
          <p className="text-center mb-4 text-2xl font-bold">Sign In</p>
          <button
            onClick={close}
            className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-600 text-white"
          >
            x
          </button>
        </div>
        <p>Username *</p>
        <input
          type="text"
          id="username"
          placeholder="name"
          className="rounded-md p-1 mb-2 mt-1 text-black"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
          required
        />
        <p>Password *</p>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-md p-1 mb-2 mt-1 text-black"
          id="password"
          placeholder="password"
          value={password}
          autoComplete="current-password"
          required
        />
        <button
          onClick={handleAuth}
          className="border mt-6 bg-slate-400 rounded-md size-fit py-1 px-4 self-center"
        >
          Sign In
        </button>
      </div>
    </dialog>
  );
};

export default Login;
