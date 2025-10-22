import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <header className="bg-base-100 py-3 px-0 border-b border-[#E8E8E8] mb-10">
      <div className="navbar">
        <div className="navbar-start">
          {/* MobilMenu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
          <a className="btn bg-transparent border-none shadow-none hover:shadow-none">
            <img src="logo.png" alt="" className="w-[48px]" />
            <span className="text-[#0F0F0F80] text-3xl font-extrabold">
              Law.BD
            </span>
          </a>
        </div>
        {/* DesktopMenu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10">
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
          <a className="btn bg-[#0EA106] text-white border boder-[#0EA106] hover:bg-transparent hover:border-[#0EA106] hover:text-[#0EA106] rounded-full py-4 px-8">
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
