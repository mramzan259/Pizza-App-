import React from "react";

const Customloading = ({ text = "Loading..." }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-14 h-14 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="mt-2 text-gray-600 font-medium text-xl">{text}</p>
    </div>
  );
};

export default Customloading;
