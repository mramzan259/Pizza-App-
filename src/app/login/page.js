"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Login() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const res = await response.json();

      if (res.success) {
        localStorage.setItem("token", res.authToken);
        localStorage.setItem("userEmail", credentials.email);
        localStorage.setItem("isAdmin", res.isAdmin);
        // alert("Login Successful...");
        router.push("/");
      } else {
        alert(res.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-[88.6vh] bg-cover bg-center flex justify-center items-center bg-[url(https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]">
      <div className="container w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="transition-colors duration-700 bg-gray-100 dark:bg-gray-900 dark:text-gray-100 border-gradient rounded-lg shadow-2xl px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 transition-colors duration-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              placeholder="Enter your email/username"
              name="email"
              onChange={handleChange}
              type="email"
              required
              autoFocus
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 transition-colors duration-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
              value={credentials.email}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 transition-colors duration-700  dark:text-gray-300 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              placeholder="*******"
              onChange={handleChange}
              name="password"
              required
              type="password"
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 transition-colors duration-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
              value={credentials.password}
            />
          </div>
          <div className="flex items-center justify-between"></div>
          <button
            type="submit"
            className="border cursor-pointer transition-colors duration-700 text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100 "
          >
            Log in
          </button>
          <Link href={"/signup"} style={{ all: "unset" }}>
            <button className="border cursor-pointer text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100 transition-colors duration-700">
              New User?
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
