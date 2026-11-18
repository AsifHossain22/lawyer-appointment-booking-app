import React from 'react';
import CountUp from 'react-countup';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      image: 'lawyer.png',
      number: 199,
      suffix: '+',
      title: 'Total Lawyer',
    },
    {
      id: 2,
      image: 'success-review.png',
      number: 467,
      suffix: '+',
      title: 'Total Reviews',
    },
    {
      id: 3,
      image: 'success-layer.png',
      number: 1900,
      suffix: '+',
      title: 'Case Initiated',
    },
    {
      id: 4,
      image: 'success-staffs.png',
      number: 300,
      suffix: '+',
      title: 'Total Staffs',
    },
  ];

  return (
    <div className="mt-10">
      <div className="text-center">
        <h2 className="text-base-content text-3xl sm:text-[40px] font-extrabold">
          We Provide Best Law Services
        </h2>
        <p className="text-base-content/70 mt-2">
          Our platform connects you with verified, experienced Lawyers across
          various specialities - all at your convenience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 px-4 sm:px-8 lg:px-0">
        {servicesData.map(service => (
          <div
            key={service?.id}
            className="px-6 py-10 bg-base-200 border border-base-300 rounded-2xl text-center sm:text-left transition-colors"
          >
            <div>
              <img
                src={service?.image}
                alt={service?.title}
                className="w-12 sm:w-16 mx-auto lg:mx-0"
              />
            </div>
            <h4 className="text-base-content text-3xl sm:text-4xl md:text-5xl font-extrabold pt-4 pb-3 text-center lg:text-left">
              <CountUp
                end={service?.number}
                duration={3}
                separator=","
                enableScrollSpy
              />
              {service?.suffix}
            </h4>
            <p className="text-center lg:text-left text-base-content/60 text-lg sm:text-xl font-medium">
              {service?.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
