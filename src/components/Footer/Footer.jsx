import React from "react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";

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
          <a className="hover:bg-transparent text-base font-semibold hover:text-[#0EA106] cursor-pointer duration-300">
            Home
          </a>
          <a className="hover:bg-transparent text-base font-semibold hover:text-[#0EA106] cursor-pointer duration-300">
            My Bookings
          </a>
          <a className="hover:bg-transparent text-base font-semibold hover:text-[#0EA106] cursor-pointer duration-300">
            Blogs
          </a>
        </nav>
      </aside>

      {/* BorderLine */}
      <span className="inline-block w-full border-b border-dashed border-[#FFFFFF20]"></span>

      {/* SocialMediaLinks */}
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">
          <Github className="socialMediaIcon duration-300" />
        </a>
        <a className="link link-hover">
          {" "}
          <Linkedin className="socialMediaIcon duration-300" />
        </a>
        <a className="link link-hover">
          <Twitter className="socialMediaIcon duration-300" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
