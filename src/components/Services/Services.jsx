import React from "react";

const Services = () => {
  return (
    <div>
      {/* SectionTitle */}
      <div className="text-center">
        <h2 className="text-[#0F0F0F] text-[40px] font-extrabold">
          We Provide Best Law Services
        </h2>
        <p className="">
          Our platform connects you with verified, experienced Lawyers across
          various specialities — all at your convenience.
        </p>
      </div>

      {/* ServiceCardContainer */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
        {/* ServiceCard - 1 */}
        <div className="px-12 py-10 bg-[#0F0F0F05] rounded-2xl">
          {/* ServiceImage */}
          <div>
            <img src="lawyer.png" alt="" className="w-16" />
          </div>
          <h4 className="text-[#0F0F0F] text-5xl font-extrabold pt-4 pb-3">
            199+
          </h4>
          <p className="text-[#0F0F0F60] text-xl font-medium">Total Layer</p>
        </div>
        {/* ServiceCard - 2 */}
        <div className="px-12 py-10 bg-[#0F0F0F05] rounded-2xl">
          {/* ServiceImage */}
          <div>
            <img src="success-review.png" alt="" className="w-16" />
          </div>
          <h4 className="text-[#0F0F0F] text-5xl font-extrabold pt-4 pb-3">
            467+
          </h4>
          <p className="text-[#0F0F0F60] text-xl font-medium">Total Reviews</p>
        </div>
        {/* ServiceCard - 3 */}
        <div className="px-12 py-10 bg-[#0F0F0F05] rounded-2xl">
          {/* ServiceImage */}
          <div>
            <img src="success-layer.png" alt="" className="w-16" />
          </div>
          <h4 className="text-[#0F0F0F] text-5xl font-extrabold pt-4 pb-3">
            1900+
          </h4>
          <p className="text-[#0F0F0F60] text-xl font-medium">Case Initiated</p>
        </div>
        {/* ServiceCard - 4 */}
        <div className="px-12 py-10 bg-[#0F0F0F05] rounded-2xl">
          {/* ServiceImage */}
          <div>
            <img src="success-staffs.png" alt="" className="w-16" />
          </div>
          <h4 className="text-[#0F0F0F] text-5xl font-extrabold pt-4 pb-3">
            300+
          </h4>
          <p className="text-[#0F0F0F60] text-xl font-medium">Total Staffs</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
