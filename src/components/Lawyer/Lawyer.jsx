import React from "react";
import { Link } from "react-router";

const Lawyer = ({ lawyer }) => {
  // console.log(lawyer);

  const { lawyerImage, lawyerName, lawyerDesignation, licenceNumber } = lawyer;

  return (
    <div>
      {/* LawyersCard */}
      <div className="border border-[#0F0F0F15] rounded-2xl p-6">
        {/* LawyersInfo */}
        <div className="flex items-center gap-14">
          {/* Lawyer's Image Container */}
          <div className="w-4/12">
            <img src={lawyerImage} alt="" className="w-[160px] rounded-xl" />
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
              {lawyerName}
            </h4>
            {/* Lawyer's Designation */}
            <h6 className="text-[#0F0F0F60] text-lg font-medium">
              {lawyerDesignation}
            </h6>
            {/* Lawyer's Licence No. */}
            <p className="text-[#0F0F0F70] font-medium">
              &#174; Licence No: {licenceNumber}
            </p>
            {/* Lawyer's Details Button */}
            <div>
              <Link
                to={`/lawyers/${lawyer.lawyerId}`}
                className="w-full block text-center border border-[#176AE520] rounded-full text-[#176AE5] hover:text-white px-3.5 py-2 cursor-pointer hover:bg-[#176AE5] duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lawyer;
