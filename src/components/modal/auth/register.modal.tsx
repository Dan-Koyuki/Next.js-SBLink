"use client";

import React, { useState } from "react";
import { AuthProps, register } from "./auth";
// import { useRouter } from "next/navigation";

const Register = ({ modalSetting, closeFunc, tokenSetter }: AuthProps) => {
  // const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const close = () => {
    closeFunc();
  };

  const handleRoleChange = (event:string) => {
    setRole(event);
  };

  const validateEmail = (email: string) => {
    // Very basic email validation, you may need a more robust solution
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleAuth = async () => {
    if (!username || !password || !email) {
      alert("Please fill in all fields");
      return;
    }
    // Perform email format validation
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
    try {
      await register({ username, password, email, role });
      close();
      tokenSetter();
      // router.push('home');
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again later.");
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
          <p className="text-center mb-4 text-2xl font-bold">Sign Up</p>
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
        <p>Email Address *</p>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-md p-1 mb-2 mt-1 text-black"
          placeholder="myexample@gmail.com"
          id="email"
          value={email}
          autoComplete="email"
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
        <p>Role *</p>
        <div className="flex gap-4">
          <label>
            <input
              type="radio"
              name="role"
              value="Villagers"
              checked={role === "Villagers"}
              onChange={() => handleRoleChange("Villagers")}
            />
            Villagers
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="Guest"
              checked={role === "Guest"}
              onChange={() => handleRoleChange("Guest")}
            />
            Guest
          </label>
        </div>
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

export default Register;
