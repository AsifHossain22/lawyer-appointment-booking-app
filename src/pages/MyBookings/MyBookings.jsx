import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  // LoadBookingsDataFromLocalStorage
  useEffect(() => {
    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(existingBookings);
  }, []);

  // CancelAppointment
  const handleCancelAppointment = (lawyerId) => {
    const updatedBookings = bookings.filter(
      (booking) => booking?.lawyerId !== lawyerId
    );
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    // CancelledAppointmentToastify
    toast.info("Appointment cancelled successfully!");
  };

  // console.log(bookings);

  return (
    <div className="py-20">
      {/* SectionTitle */}
      <div className="text-center">
        <h2 className="text-[#0F0F0F] text-[40px] font-extrabold mb-4">
          My Today Appointments
        </h2>
        <p className="w-10/12 mx-auto">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience.
        </p>
      </div>

      {/* BookAppointmentContainer */}
      {bookings.length === 0 ? (
        <p className="text-center mt-10 text-gray-500 text-lg">
          You have no booked appointments yet.
        </p>
      ) : (
        <div className="p-8 my-10 border border-[#14141415] rounded-2xl space-y-6">
          {bookings.map((lawyer) => (
            <div
              key={lawyer?.lawyerId}
              className="border-b border-dashed border-[#0F0F0F10] pb-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-[#141414] text-xl font-bold">
                    {lawyer?.lawyerName}
                  </h4>
                  <p className="text-[#14141460] text-lg font-medium">
                    {lawyer?.speciality}
                  </p>
                </div>
                <div>
                  <p className="text-[#14141460] text-lg font-medium">
                    Fee:{" "}
                    <span className="font-bold text-[#0EA106]">
                      {lawyer?.consultationFee}
                    </span>
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleCancelAppointment(lawyer?.lawyerId)}
                className="mt-3 w-full block text-center border border-[#E0242440] rounded-full text-[#E02424] hover:text-white px-3.5 py-2 cursor-pointer hover:bg-[#E02424] duration-300"
              >
                Cancel Appointment
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
