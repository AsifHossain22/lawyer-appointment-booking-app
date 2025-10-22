import React from "react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#0F0F0F] text-primary-content py-24 px-20 gap-5">
      <aside className="gap-8">
        {/* FooterLogo */}
        <div className="flex items-center gap-4 cursor-pointer">
          <img src="logo-footer.png" alt="" />
          <span className="text-white text-3xl font-extrabold">Law.BD</span>
        </div>

        {/* FooterMenu */}
        <nav className="grid grid-flow-col gap-12">
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
        </nav>
      </aside>

      {/* BorderLine */}
      <span className="inline-block w-full border-b border-dashed border-[#FFFFFF20]"></span>

      {/* SocialMediaLinks */}
      <nav className="grid grid-flow-col gap-4">
        <a
          className="link link-hover"
          href="https://github.com/AsifHossain22"
          target="_blank"
        >
          <Github className="socialMediaIcon duration-300" />
        </a>
        <a
          className="link link-hover"
          href="https://www.linkedin.com/in/asifhossain22/"
          target="_blank"
        >
          <Linkedin className="socialMediaIcon duration-300" />
        </a>
        <a
          className="link link-hover"
          href="https://twitter.com/AsifHossain22"
          target="_blank"
        >
          <Twitter className="socialMediaIcon duration-300" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
