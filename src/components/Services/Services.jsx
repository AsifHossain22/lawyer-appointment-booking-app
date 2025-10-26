import React from "react";
import CountUp from "react-countup";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      image: "lawyer.png",
      number: 199,
      suffix: "+",
      title: "Total Layer",
    },
    {
      id: 2,
      image: "success-review.png",
      number: 467,
      suffix: "+",
      title: "Total Reviews",
    },
    {
      id: 3,
      image: "success-layer.png",
      number: 1900,
      suffix: "+",
      title: "Case Initiated",
    },
    {
      id: 4,
      image: "success-staffs.png",
      number: 300,
      suffix: "+",
      title: "Total Staffs",
    },
  ];

  return (
    <div className="mt-10">
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
        {servicesData.map((service) => (
          <div
            key={service?.id}
            className="px-12 py-10 bg-[#0F0F0F05] rounded-2xl"
          >
            {/* ServiceImage */}
            <div>
              <img src={service?.image} className="w-16" />
            </div>
            {/* AnimateNumber */}
            <h4 className="text-[#0F0F0F] text-5xl font-extrabold pt-4 pb-3">
              <CountUp
                end={service?.number}
                duration={3}
                separator=","
                enableScrollSpy
              />
              {service?.suffix}
            </h4>
            <p className="text-[#0F0F0F60] text-xl font-medium">
              {service?.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
