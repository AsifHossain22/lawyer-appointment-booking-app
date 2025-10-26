import React, { Suspense, useState } from "react";
import Lawyer from "../Lawyer/Lawyer";

const Lawyers = ({ data }) => {
  // StateHandlerToShowLawyersData
  const [showAllLawyers, setShowAllLawyers] = useState(false);

  // InitiallyShowOnlySixLawyersData
  const visibleLawyers = showAllLawyers ? data : data.slice(0, 6);

  return (
    <div>
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
      <Suspense fallback={<span>Loading...</span>}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 py-10 px-4 sm:px-6 lg:px-0">
          {visibleLawyers.map((lawyer) => (
            <Lawyer key={lawyer?.lawyerId} lawyer={lawyer}></Lawyer>
          ))}
        </div>
      </Suspense>

      {/* ShowAllLawyersButton */}
      {!showAllLawyers && (
        <div className="text-center">
          <button
            onClick={() => setShowAllLawyers(true)}
            className="border border-[#176AE520] rounded-full hover:text-[#176AE5] text-white px-6 py-2 font-semibold bg-[#176AE5] hover:bg-transparent cursor-pointer duration-300"
          >
            Show All Lawyers
          </button>
        </div>
      )}
    </div>
  );
};

export default Lawyers;
