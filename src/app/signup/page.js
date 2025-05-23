"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Signup() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.geolocation,
        }),
      });
      const res = await response.json();
      console.log(res);

      if (res.message === "User already exists") {
        alert(res.message);
        return;
      }

      if (res.success) {
        // localStorage.setItem("token", res.token);
        // localStorage.setItem("userEmail", credentials.email);
        // localStorage.setItem("isAdmin", false);
        router.push("/login");
        //logic for signup
      } else {
        alert("There is something wrong. Please try again");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="h-[88.6vh] bg-center bg-cover flex justify-center items-center bg-[url(https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]">
      <div className="container w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 transition-colors duration-700 dark:bg-gray-900 dark:text-gray-100 border-gradient rounded-lg shadow-2xl px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 transition-colors duration-700  dark:text-gray-300 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              placeholder="Enter your name"
              name="name"
              onChange={handleChange}
              type="text"
              required
              autoFocus
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 transition-colors duration-700  text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
              value={credentials.name}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 transition-colors duration-700   dark:text-gray-300 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
              type="email"
              required
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 transition-colors duration-700  text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
              value={credentials.email}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 transition-colors duration-700   dark:text-gray-300 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              placeholder="*******"
              onChange={handleChange}
              name="password"
              required
              type="password"
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 transition-colors duration-700  text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
              value={credentials.password}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="geolocation"
              className="block text-gray-700 transition-colors duration-700   dark:text-gray-300 text-sm font-bold mb-2"
            >
              Address
            </label>
            <input
              placeholder="enter your address"
              onChange={handleChange}
              name="geolocation"
              required
              type="text"
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 transition-colors duration-700  text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
              value={credentials.geolocation}
            />
          </div>
          <div className="flex items-center justify-between"></div>
          <button
            type="submit"
            className="border cursor-pointer font-bold text-gray-900 transition-colors duration-700  dark:text-gray-100 dark:border-gray-400 border-gray-900 rounded p-2 mr-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100"
          >
            Signup
          </button>
          <Link href={"/login"} style={{ all: "unset" }}>
            <button className="border cursor-pointer text-gray-900 transition-colors duration-700  dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100">
              Already a user?
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
