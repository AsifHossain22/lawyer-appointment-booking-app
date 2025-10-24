import React from "react";

const MyBookings = () => {
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
      <div className="p-8 my-10 border border-[#14141415] rounded-2xl">
        {/* AppointmentCard */}
        <div className="">
          {/* LawyerInfo */}
          <div className="flex items-center justify-between border-b border-dashed border-[#0F0F0F10] pb-3 mb-3">
            {/* LawyerTitle */}
            <div>
              <h4 className="text-[#141414] text-xl font-bold">Lawyer Title</h4>
              <p className="text-[#14141460] text-lg font-medium">
                Lawyer Specialty
              </p>
            </div>
            {/* LawyerFee */}
            <div>
              <p className="text-[#14141460] text-lg font-medium">
                Appointment Fee :{" "}
              </p>
            </div>
          </div>
          {/* CancelAppointmentButton */}
          <div>
            <button className="w-full block text-center border border-[#E0242440] rounded-full text-[#E02424] hover:text-white px-3.5 py-2 cursor-pointer hover:bg-[#E02424] duration-300">
              Cancel Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
