import React from "react";
import { Link } from "react-router";

const Lawyer = ({ lawyer }) => {
  // console.log(lawyer);

  // GetWeekDayName
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  //CheckLawyerAvailability
  const isAvailableToday = lawyer.availability.includes(today);

  const { lawyerImage, lawyerName, lawyerDesignation, licenceNumber } = lawyer;

  return (
    <div>
      {/* LawyersCard */}
      <div className="border border-[#0F0F0F15] rounded-2xl p-4 sm:p-6 lg:p-6">
        <div className="flex flex-col sm:flex-row items-center justify-start lg:items-center sm:items-start gap-4 sm:gap-14">
          <div className="w-full sm:w-4/12 flex justify-center lg:justify-start sm:justify-start">
            <img
              src={lawyerImage}
              className="w-[120px] sm:w-[160px] rounded-xl"
            />
          </div>
          <div className="w-full sm:w-8/12 flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-2.5">
              {isAvailableToday ? (
                <span className="badge badge-soft badge-success rounded-full">
                  Available Today
                </span>
              ) : (
                <span className="badge badge-soft badge-error rounded-full">
                  Not Available Today
                </span>
              )}
              <span className="text-sm font-medium bg-blue-200 text-blue-400 py-1.5 px-3 rounded-full">
                {lawyer.experience}+ Years Experience
              </span>
            </div>
            <h4 className="text-[#0F0F0F] text-xl sm:text-2xl font-extrabold text-center md:text-left">
              {lawyerName}
            </h4>
            <h6 className="text-[#0F0F0F60] text-sm sm:text-lg font-medium text-center md:text-left">
              {lawyerDesignation}
            </h6>
            <p className="text-[#0F0F0F70] font-medium text-center md:text-left">
              &#174; Licence No: {licenceNumber}
            </p>
            <div>
              <Link
                to={`lawyers/${lawyer.lawyerId}`}
                className="w-full sm:w-auto block text-center border border-[#176AE520] rounded-full text-[#176AE5] hover:text-white px-3.5 py-2 cursor-pointer hover:bg-[#176AE5] duration-300 mt-2 sm:mt-0"
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
