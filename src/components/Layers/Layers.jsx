import React from "react";

const Layers = () => {
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

      {/* LayersContainer */}
      <div className="grid grid-cols-1 md:grid-cols-2 py-10">
        {/* LayersInfo */}
        <div>
          {/* Layer's Image Container */}
          <div>
            <img src="" alt="" />
          </div>
          {/* Layer's Details Container */}
          <div>
            {/* Availablity & Experience */}
            <div>
              <span>Available</span>
              <span>Experience</span>
            </div>
            {/* Layer's Title */}
            <h4>Layer's Title</h4>
            {/* Layer's Designation */}
            <h6>Layer's Designation</h6>
            {/* Layer's Licence No. */}
            <p>Licence No.</p>
            {/* Layer's Details Button */}
            <button>View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layers;
