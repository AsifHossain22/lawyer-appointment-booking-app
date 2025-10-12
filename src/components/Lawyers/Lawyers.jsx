import React from "react";

const Lawyers = () => {
  return (
    <div className="py-20">
      {/* SectionTitle */}
      <div className="text-center">
        <h2 className="text-[#0F0F0F] text-[40px] font-extrabold">
          Our Best Lawyers
        </h2>
        <p className="w-10/12 mx-auto">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. Whether it's a routine
          <br />
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>

      {/* LawyersContainer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-10">
        {/* LawyersCard */}
        <div className="border border-[#0F0F0F15] rounded-2xl p-6">
          {/* LawyersInfo */}
          <div className="flex items-center gap-14">
            {/* Lawyer's Image Container */}
            <div className="w-4/12">
              <img src="lawyer.png" alt="" className="w-[160px]" />
            </div>
            {/* Lawyer's Details Container */}
            <div className="w-8/12 flex flex-col gap-1.5">
              {/* Availablity & Experience */}
              <div className="flex gap-2.5">
                <span className="text-sm font-medium bg-green-200 text-green-400 py-1.5 px-3 rounded-full cursor-pointer">
                  Available
                </span>
                <span className="text-sm font-medium bg-blue-200 text-blue-400 py-1.5 px-3 rounded-full cursor-pointer">
                  Experience
                </span>
              </div>
              {/* Lawyer's Title */}
              <h4 className="text-[#0F0F0F] text-2xl font-extrabold">
                Layer's Title
              </h4>
              {/* Lawyer's Designation */}
              <h6 className="text-[#0F0F0F60] text-lg font-medium">
                Layer's Designation
              </h6>
              {/* Lawyer's Licence No. */}
              <p className="text-[#0F0F0F70] font-medium">&#174; Licence No.</p>
              {/* Lawyer's Details Button */}
              <div>
                <button className="w-full border border-[#176AE520] rounded-full text-[#176AE5] hover:text-white px-3.5 py-2 cursor-pointer hover:bg-[#176AE5] duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lawyers;
