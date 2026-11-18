import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import RechartBarChart from '../../components/RechartBarChart/RechartBarChart';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(existingBookings);
  }, []);

  const handleCancelAppointment = lawyerId => {
    const updatedBookings = bookings.filter(
      booking => booking?.lawyerId !== lawyerId,
    );
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    window.dispatchEvent(new Event('storage'));
    toast.info('Appointment cancelled successfully!');
  };

  return (
    <div className="py-8 lg:py-16 px-4 max-w-7xl mx-auto space-y-8">
      {/* RechartSection */}
      {bookings.length > 0 && <RechartBarChart />}

      {bookings.length === 0 ? (
        <div className="text-center py-20 bg-base-100 border border-base-300 rounded-3xl p-8 shadow-sm">
          <p className="text-base-content text-2xl md:text-3xl font-extrabold mb-6">
            You have no booked appointments yet.
          </p>
          <button
            onClick={() => navigate('/')}
            className="border border-[#0EA106] rounded-full text-lg font-bold text-white hover:text-[#0EA106] px-8 py-3 cursor-pointer bg-[#0EA106] hover:bg-transparent duration-300 shadow-sm"
          >
            Book an Appointment
          </button>
        </div>
      ) : (
        <div className="p-6 md:p-10 border border-base-300 bg-base-100 rounded-3xl shadow-sm space-y-8">
          <div className="text-center">
            <h2 className="text-base-content text-2xl md:text-4xl font-extrabold mb-3">
              My Today's Appointments
            </h2>
            <p className="w-11/12 md:w-8/12 mx-auto text-base-content/70 text-base">
              Our platform connects you with verified, experienced Lawyers
              across various specialties.
            </p>
          </div>

          <div className="p-4 sm:p-8 border border-base-300 bg-base-200/50 rounded-2xl space-y-6">
            {bookings.map(lawyer => (
              <div
                key={lawyer.lawyerId}
                className="border-b border-dashed border-base-300 pb-6 last:border-none last:pb-0"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h4 className="text-base-content text-lg sm:text-xl font-bold">
                      {lawyer.lawyerName}
                    </h4>
                    <p className="text-base-content/70 text-base font-medium">
                      {lawyer.speciality}
                    </p>
                  </div>
                  <div>
                    <p className="text-base-content/70 text-base">
                      Fee:{' '}
                      <span className="font-bold text-[#0EA106]">
                        {lawyer.consultationFee}
                      </span>
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleCancelAppointment(lawyer.lawyerId)}
                  className="mt-4 w-full sm:w-auto block text-center border border-error/40 rounded-full text-error hover:text-white px-5 py-2 cursor-pointer hover:bg-error duration-300 font-semibold"
                >
                  Cancel Appointment
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
