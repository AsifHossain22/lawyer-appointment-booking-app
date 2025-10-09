import React from "react";

const Error = () => {
  return (
    <div className="errorPage flex justify-center items-end">
      {/* Content */}
      <div className="text-center text-white">
        <h2 className="text-5xl font-extrabold">Page Not Found</h2>
        <p className="text-xl font-semibold py-3">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button className="bg-white hover:bg-transparent border-2 border-white text-black hover:text-white text-lg font-medium px-8 py-3 rounded-full cursor-pointer duration-300">
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Error;
