"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <div className="max-w-md p-8">
        <h1 className="text-9xl font-extrabold text-gray-500">404</h1>
        <p className="mt-4 text-xl text-gray-700">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-gray-500">Maybe try exploring our delicious menu?</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/">
            <button className="bg-blue-500 p-3 rounded-xl cursor-pointer hover:bg-blue-600 text-white">
              Go to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
