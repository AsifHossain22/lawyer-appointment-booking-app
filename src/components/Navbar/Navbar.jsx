import React from "react";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {
  // NavigateToHomePage
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-base-100 py-3 px-0 border-b border-[#E8E8E8] mb-10">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="navbar-start">
          {/* MobileMenu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? "text-[#0EA106] text-base font-semibold"
                    : "hover:text-[#0EA106] text-base font-semibold duration-300"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/my-bookings"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#0EA106] text-base font-semibold"
                    : "hover:text-[#0EA106] text-base font-semibold duration-300"
                }
              >
                My Bookings
              </NavLink>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#0EA106] text-base font-semibold"
                    : "hover:text-[#0EA106] text-base font-semibold duration-300"
                }
              >
                Blogs
              </NavLink>
            </ul>
          </div>
          {/* Logo */}
          <a className="btn bg-transparent border-none shadow-none hover:shadow-none flex items-center gap-2">
            <img src="logo.png" alt="" className="w-10 sm:w-12" />
            <span className="text-[#0F0F0F80] text-xl sm:text-3xl font-extrabold">
              Law.BD
            </span>
          </a>
        </div>
        {/* DesktopMenu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 lg:gap-10">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-[#0EA106] text-base font-semibold"
                  : "hover:text-[#0EA106] text-base font-semibold duration-300"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/my-bookings"
              className={({ isActive }) =>
                isActive
                  ? "text-[#0EA106] text-base font-semibold"
                  : "hover:text-[#0EA106] text-base font-semibold duration-300"
              }
            >
              My Bookings
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "text-[#0EA106] text-base font-semibold"
                  : "hover:text-[#0EA106] text-base font-semibold duration-300"
              }
            >
              Blogs
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <button
            onClick={() => navigate("/")}
            className="btn bg-[#0EA106] text-white border border-[#0EA106] hover:bg-transparent hover:border-[#0EA106] hover:text-[#0EA106] rounded-full py-3 px-6 sm:py-4 sm:px-8 text-sm sm:text-base"
          >
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
