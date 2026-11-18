import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="bg-base-100 text-base-content min-h-screen flex flex-col transition-colors duration-200">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-0 relative">
        <div
          className={`absolute inset-0 flex items-center justify-center bg-base-100 bg-opacity-70 z-50 transition-opacity duration-300 ${
            isLoading
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col items-center">
            <span className="loading loading-spinner loading-lg text-[#0EA106]"></span>
            <p className="mt-2 text-[#0EA106] font-semibold">Loading...</p>
          </div>
        </div>

        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
