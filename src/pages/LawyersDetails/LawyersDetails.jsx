import React, { useEffect } from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

const LawyersDetails = () => {
  const { lawyerId } = useParams();
  const lawyers = useLoaderData();
  const navigate = useNavigate();
  const lawyer = lawyers?.find(item => item?.lawyerId === lawyerId);

  useEffect(() => {
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const alreadyBooked = existingBookings.some(
      booking => booking?.lawyerId === lawyer?.lawyerId,
    );

    if (alreadyBooked) {
      const confirmBookingButton = document.getElementById('bookingButton');
      if (confirmBookingButton) {
        confirmBookingButton.textContent = 'Booked';
        confirmBookingButton.disabled = true;
        confirmBookingButton.style.opacity = '0.6';
        confirmBookingButton.style.cursor = 'not-allowed';
        confirmBookingButton.style.backgroundColor = '#c5c5c5';
        confirmBookingButton.style.borderColor = '#c5c5c5';
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

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const isAvailableToday = lawyer?.availability.includes(today);

  const handleBooking = lawyerData => {
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const alreadyBooked = existingBookings.some(
      booking => booking?.lawyerId === lawyerData?.lawyerId,
    );

    if (!alreadyBooked) {
      existingBookings.push(lawyerData);
      localStorage.setItem('bookings', JSON.stringify(existingBookings));

      const confirmBookingButton = document.getElementById('bookingButton');
      if (confirmBookingButton) {
        confirmBookingButton.textContent = 'Booked';
        confirmBookingButton.disabled = true;
        confirmBookingButton.style.opacity = '0.6';
        confirmBookingButton.style.cursor = 'not-allowed';
        confirmBookingButton.style.backgroundColor = '#c5c5c5';
        confirmBookingButton.style.borderColor = '#c5c5c5';
      }

      navigate('/my-bookings');
      toast.success('Appointment booked successfully!');
    }
  };

  return (
    <div className="px-4 max-w-7xl mx-auto py-10">
      {/* SectionTitle */}
      <div className="p-6 md:p-12 border border-base-300 bg-base-200 rounded-2xl text-center">
        <h1 className="text-2xl md:text-4xl text-base-content font-extrabold">
          Lawyer’s Profile Details
        </h1>
        <p className="text-base-content/70 text-sm md:text-lg font-medium mt-4">
          Explore and book professional consultations with verified legal
          experts.
        </p>
      </div>

      {/* LawyersInfoSection */}
      <div className="my-10 p-6 md:p-8 border border-base-300 bg-base-100 rounded-xl flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
        <div>
          <img
            src={lawyer.lawyerImage}
            alt={lawyer.lawyerName}
            className="lg:w-[250px] rounded-xl object-cover"
          />
        </div>
        <div className="flex-1">
          <p className="inline-block text-sm font-medium bg-blue-500/10 text-blue-500 py-1.5 px-3 rounded-full">
            {lawyer.experience}+ Years Experience
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-base-content mt-4 mb-1">
            {lawyer.lawyerName}
          </h2>
          <p className="text-base-content/70 flex flex-col md:flex-row gap-2 md:gap-10">
            <span>{lawyer.speciality}</span>
            <span>Licence Number: {lawyer.licenceNumber}</span>
          </p>
          <div className="flex flex-wrap gap-2 my-4">
            {lawyer?.availability.map((day, index) => (
              <span
                key={index}
                className="badge badge-soft badge-warning rounded-full"
              >
                {day}
              </span>
            ))}
          </div>
          <p className="text-base-content/70">
            Consultation Fee :{' '}
            <span className="text-[#0EA106] font-extrabold">
              {lawyer?.consultationFee}
            </span>
          </p>
        </div>
      </div>

      {/* BookLawyer */}
      <div className="mb-24 p-6 md:p-8 rounded-2xl border border-base-300 bg-base-100">
        <h2 className="text-base-content text-xl md:text-2xl font-bold text-center border-dashed border-b border-base-300 pb-6 mb-6">
          Book an Appointment
        </h2>

        <div className="flex justify-between items-center border-b border-base-300 pb-6 mb-6">
          <span className="text-base-content text-lg font-bold">
            Availability
          </span>
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

        <div
          role="alert"
          className="alert alert-warning alert-soft rounded-full inline-block my-2"
        >
          <span>
            Due to high volume, we are currently accepting appointments for
            today only.
          </span>
        </div>

        <div className="mt-4 w-full lg:w-auto">
          <button
            onClick={() => handleBooking(lawyer)}
            id="bookingButton"
            className="w-full lg:w-auto text-center border border-[#0EA106] rounded-full text-xl font-bold text-white hover:text-[#0EA106] px-6 py-2 cursor-pointer bg-[#0EA106] hover:bg-transparent duration-300"
          >
            Book Appointment Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LawyersDetails;
