import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../components/Footer/Footer";

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>

      {/* LoadingSpinner */}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50 transition-opacity duration-300 ${
          isLoading
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center">
          <span className="loading loading-spinner loading-lg text-[#0EA106]"></span>
          <p className="mt-2 text-[#0EA106] font-semibold">Loading...</p>
        </div>
      </div>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
