import React, { useEffect } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";

const LawyersDetails = () => {
  const { lawyerId } = useParams();
  console.log(lawyerId);
  const lawyers = useLoaderData();
  const navigate = useNavigate();
  const lawyer = lawyers.find((item) => item?.lawyerId === lawyerId);

  // CheckIfAlreadyBookedAfterPageLoad
  useEffect(() => {
    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const alreadyBooked = existingBookings.some(
      (booking) => booking?.lawyerId === lawyer?.lawyerId
    );

    if (alreadyBooked) {
      const confirmBookingButton = document.getElementById("bookingButton");

      if (confirmBookingButton) {
        confirmBookingButton.textContent = "Booked";
        confirmBookingButton.disabled = true;
        confirmBookingButton.style.opacity = "0.6";
        confirmBookingButton.style.cursor = "not-allowed";
        confirmBookingButton.style.backgroundColor = "#c5c5c5";
        confirmBookingButton.style.borderColor = "#c5c5c5";
        confirmBookingButton.classList.remove(
          "hover:bg-[#0EA106]",
          "hover:text-[#0EA106]"
        );
      }
    }
  }, [lawyer?.lawyerId]);

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

  // GetWeekdayName
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  // CheckLawyerAvailability
  const isAvailableToday = lawyer?.availability.includes(today);

  // HandleBooking
  const handleBooking = (lawyer) => {
    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    // CheckIfAlreadyBooked
    const alreadyBooked = existingBookings.some(
      (booking) => booking?.lawyerId === lawyer?.lawyerId
    );

    if (!alreadyBooked) {
      existingBookings.push(lawyer);
      localStorage.setItem("bookings", JSON.stringify(existingBookings));

      const confirmBookingButton = document.getElementById("bookingButton");
      confirmBookingButton.textContent = "Booked";
      confirmBookingButton.disabled = true;
      confirmBookingButton.style.opacity = "0.6";
      confirmBookingButton.style.cursor = "not-allowed";
      confirmBookingButton.style.backgroundColor = "#c5c5c5";
      confirmBookingButton.style.borderColor = "#c5c5c5";
      confirmBookingButton.classList.remove(
        "hover:bg-[#0EA106]",
        "hover:text-[#0EA106]"
      );

      // NavigateToMyBookingsPage
      navigate("/my-bookings");
    }
  };

  return (
    <div>
      {/* SectionTitle */}
      <div className="p-[72px] border border-[#0F0F0F15] bg-[#0F0F0F05] rounded-2xl text-center">
        <h1 className="text-[32px] text-[#141414] font-extrabold">
          Lawyer’s Profile Details
        </h1>
        <p className="text-[#14141470] text-lg font-medium w-12/12 mx-auto">
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
          amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis
          turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>

      {/* LawyersInfoSection */}
      <div className="my-10 p-8 border border-[#14141415] rounded-xl flex items-center gap-10">
        {/* LawyerImage */}
        <div>
          <img src={lawyer.lawyerImage} className="w-[250px] rounded-xl" />
        </div>
        {/* LawyerInfo */}
        <div>
          <p className="inline-block text-sm font-medium bg-blue-200 text-blue-400 py-1.5 px-3 rounded-full cursor-pointer">
            {lawyer.experience}+ Years Experience
          </p>
          <h2 className="text-2xl font-bold mt-4 mb-1">{lawyer.lawyerName}</h2>
          <p className="text-gray-500 flex items-center gap-10">
            <span>{lawyer.speciality}</span>
            <span>Licence Number: {lawyer.licenceNumber}</span>
          </p>
          <div className="flex items-center gap-2.5 my-4">
            {lawyer?.availability.map((day, index) => (
              <button
                key={index}
                className="badge badge-soft badge-warning rounded-full"
              >
                {day}
              </button>
            ))}
          </div>
          <p className="text-gray-500">
            Consultation Fee :{" "}
            <span className="text-[#0EA106] font-extrabold">
              {lawyer?.consultationFee}
            </span>
          </p>
        </div>
      </div>

      {/* BookLawyer */}
      <div className="mb-24 p-8 rounded-2xl border border-[#14141415]">
        <h2 className="text-[#141414] text-2xl font-bold text-center border-dashed border-b border-[#14141410] pb-6 mb-6">
          Book an Appointment
        </h2>
        <div className="flex justify-between items-center border-b border-[#14141410] pb-6 mb-6">
          <span className="text-[#141414] text-lg font-bold">Availability</span>

          {/* DynamicAvailability */}
          {isAvailableToday ? (
            <span className="badge badge-soft badge-success rounded-full">
              Available Today
            </span>
          ) : (
            <span className="badge badge-soft badge-error rounded-full">
              Not Available Today
            </span>
          )}
        </div>
        {/* Alert */}
        <div
          role="alert"
          className="alert alert-warning alert-soft rounded-full inline-block"
        >
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-warning h-6 w-6 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>
              Due to high patient volume, we are currently accepting
              appointments for today only. We appreciate your understanding and
              cooperation.
            </span>
          </div>
        </div>
        {/* BookingButton */}
        <div className="mt-4">
          <button
            onClick={() => handleBooking(lawyer)}
            id="bookingButton"
            className="w-full block text-center border border-[#0EA106] rounded-full text-xl font-bold text-white hover:text-[#0EA106] px-3.5 py-2 cursor-pointer bg-[#0EA106] hover:bg-transparent duration-300"
          >
            Book Appointment Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LawyersDetails;
