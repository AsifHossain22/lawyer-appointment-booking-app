import React from "react";
import { Link, useLoaderData, useParams } from "react-router";

const LawyersDetails = () => {
  const { lawyerId } = useParams();
  const lawyers = useLoaderData();
  const lawyer = lawyers.find((item) => item.lawyerId === lawyerId);

  if (!lawyer) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-error">Lawyer not found!</h2>
        <Link to="/" className="btn btn-primary mt-6">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* SectionTitle */}
      <div className="p-[72px] border border-[#0F0F0F15] bg-[#0F0F0F05] rounded-2xl text-center">
        <h1 className="text-[32px] text-[#141414] font-extrabold">
          Lawyer’s Profile Details
        </h1>
        <p className="text-[#14141470] font-medium">
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
          amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis
          turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>

      {/* LawyersInfoSection */}
      <div className="my-10 p-8 border border-[#14141415] rounded-xl flex items-center gap-10">
        {/* LawyerImage */}
        <div>
          <img src={lawyer.lawyerImage} className="w-[160px] rounded-xl" />
        </div>
        {/* LawyerInfo */}
        <div>
          <h2 className="text-2xl font-bold mt-4">{lawyer.lawyerName}</h2>
          <p className="text-gray-500">{lawyer.speciality}</p>
          <p className="mt-2">Experience: {lawyer.experience} years</p>
          <p>Licence Number: {lawyer.licenceNumber}</p>
        </div>

        <Link to="/" className="btn btn-outline btn-primary mt-6">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default LawyersDetails;
