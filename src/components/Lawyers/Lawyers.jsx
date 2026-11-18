import React, { Suspense, useState } from 'react';
import Lawyer from '../Lawyer/Lawyer';

const Lawyers = ({ data }) => {
  const [showAllLawyers, setShowAllLawyers] = useState(false);
  const visibleLawyers = showAllLawyers ? data : data.slice(0, 6);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-base-content text-3xl sm:text-[40px] font-extrabold">
          Our Best Lawyers
        </h2>
        <p className="w-10/12 mx-auto text-base-content/70 mt-2">
          Our platform connects you with verified, experienced Lawyers across
          various specialties - all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
      <Suspense
        fallback={
          <span className="loading loading-spinner text-success">
            Loading...
          </span>
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 py-10 px-4 sm:px-6 lg:px-0">
          {visibleLawyers.map(lawyer => (
            <Lawyer key={lawyer?.lawyerId} lawyer={lawyer}></Lawyer>
          ))}
        </div>
      </Suspense>

      {!showAllLawyers && (
        <div className="text-center">
          <button
            onClick={() => setShowAllLawyers(true)}
            className="border border-blue-500/30 rounded-full text-blue-500 hover:text-white px-6 py-2 font-semibold bg-blue-500/10 hover:bg-blue-500 cursor-pointer duration-300"
          >
            Show All Lawyers
          </button>
        </div>
      )}
    </div>
  );
};

export default Lawyers;
