import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { NavLink } from 'react-router';

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#0F0F0F] text-white py-24 px-6 md:px-20 gap-5 mt-auto">
      <aside className="gap-8 flex flex-col items-center">
        <div className="flex items-center gap-4 cursor-pointer">
          <img src="logo-footer.png" alt="Logo" />
          <span className="text-white text-3xl font-extrabold">Law.BD</span>
        </div>

        <nav className="grid grid-flow-col gap-6 md:gap-12">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? 'text-[#0EA106] text-base font-semibold'
                : 'hover:text-[#0EA106] text-base font-semibold duration-300'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/my-bookings"
            className={({ isActive }) =>
              isActive
                ? 'text-[#0EA106] text-base font-semibold'
                : 'hover:text-[#0EA106] text-base font-semibold duration-300'
            }
          >
            My Bookings
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive
                ? 'text-[#0EA106] text-base font-semibold'
                : 'hover:text-[#0EA106] text-base font-semibold duration-300'
            }
          >
            Blogs
          </NavLink>
        </nav>
      </aside>

      <span className="inline-block w-full border-b border-dashed border-white/20"></span>

      <nav className="grid grid-flow-col gap-4">
        <a
          className="link link-hover"
          href="https://github.com/AsifHossain22"
          target="_blank"
          rel="noreferrer"
        >
          <Github className="socialMediaIcon duration-300" />
        </a>
        <a
          className="link link-hover"
          href="https://www.linkedin.com/in/asifhossain22/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin className="socialMediaIcon duration-300" />
        </a>
        <a
          className="link link-hover"
          href="https://twitter.com/AsifHossain22"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter className="socialMediaIcon duration-300" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
