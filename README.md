# Law.BD — Lawyer Appointment Booking System

JurisConsult is a specialized React application that simplifies the process of finding and booking legal consultations. Clients can browse through various legal specialties, view lawyer profiles and book appointments through a structured, validated interface.

**Live Demo: https://lawyer-appointment-booking-react-app.netlify.app/**

---

## Features

* **Expert Directory:** Browse a comprehensive list of verified lawyers categorized by their field of expertise (Criminal, Civil, Corporate, Family etc.).
* **Advanced Filtering:** Instantly filter lawyers based on specialty, experience level or consultation fees.
* **Detailed Lawyer Profiles:** View individual profiles featuring education, successful case history and client testimonials.
* **Smart Booking System:**
    * **Date & Time Selection:** Integrated calendar and slot selection for appointments.
    * **Consultation Type:** Choose between In-person, Video Call or Phone consultations.
* **Secure Form Validation:** Robust client-side validation for booking forms to ensure accurate data collection.
* **Appointment Confirmation:** Instant visual feedback and "My Bookings" section to track upcoming consultations.
* **Professional Corporate UI:** Built with a "Trust-First" design philosophy using a clean, professional color palette and typography.

---

## Technologies

| Technology | Purpose |
| :--- | :--- |
| **React** | Building the modular lawyer cards and appointment scheduling logic |
| **React Router** | Handling seamless transitions between the directory and booking pages |
| **Tailwind CSS** | Styling the professional corporate interface and responsive layouts |
| **DaisyUI / Headless UI** | Accessible UI components for modals and dropdown menus |
| **React Hook Form** | Managing complex booking form states and validation |
| **React Hot Toast** | Providing confirmation alerts for successful bookings |
| **Vite** | High-performance development and build environment |
| **Netlify** | Reliable hosting and continuous deployment |

---

## Project Structure

```text
src/
├── assets/               # Professional law-themed imagery and logos
├── components/           # Reusable UI components
│   ├── Header/           # Navigation with "Join as Lawyer" CTA
│   ├── LawyerCard/       # Grid item displaying expert summaries
│   ├── FilterSidebar/    # Category and price range filtering logic
│   ├── AppointmentModal/ # The core booking form and calendar integration
│   └── Testimonials/     # Client review slider
├── pages/                # Route-level components
│   ├── Home/             # Landing page with featured experts
│   ├── LawyerDirectory/  # Searchable list of all legal professionals
│   ├── ProfileDetails/   # Full bio and booking entry point
│   └── Dashboard/        # User view for managed appointments
├── App.jsx               # Application routing and global layout
└── main.jsx              # Entry point
