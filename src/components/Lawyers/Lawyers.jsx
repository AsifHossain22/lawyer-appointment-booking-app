import React, { Suspense } from "react";
import Lawyer from "../Lawyer/Lawyer";

const Lawyers = ({ data }) => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-10">
          {data.map((lawyer) => (
            <Lawyer key={lawyer.lawyerId} lawyer={lawyer}></Lawyer>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Lawyers;
