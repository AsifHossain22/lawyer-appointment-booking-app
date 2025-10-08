import React from "react";

const Banner = () => {
  return (
    <div className="bannerContainer mb-10 rounded-3xl bg-gradient-to-r from-[#0F0F0F00] from-0% to-[#0F0F0F] to-100%">
      <div className="bannerContent flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl font-extrabold w-9/12 leading-15">
          It avoids subjective claims or exaggeration that might raise red flags
          legally
        </h1>
        <p className="pt-4 w-9/12 font-medium">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
    </div>
  );
};

export default Banner;
