import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#0F0F0F] text-primary-content py-24 px-20">
      <aside className="gap-8">
        {/* FooterLogo */}
        <div className="flex items-center gap-4">
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
          <a className="hover:bg-transparent text-base font-semibold hover:text-[#0EA106] cursor-pointer duration-300">
            Contact Us
          </a>
        </nav>
      </aside>
      {/* SocialMediaLinks */}
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">Facebook</a>
        <a className="link link-hover">Instagram</a>
        <a className="link link-hover">Twitter</a>
      </nav>
    </footer>
  );
};

export default Footer;
