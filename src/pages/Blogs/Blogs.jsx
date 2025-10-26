import React from "react";
import { CalendarHeart } from "lucide-react";

const Blogs = () => {
  const blogQnA = [
    {
      question: "What is useState and how does it work in React?",
      answer:
        "useState is a React hook that allows functional components to hold and manage state. It returns a state variable and a function to update that state. Whenever the state updates, React re-renders the component to reflect the new value.",
      date: "January 12, 2025",
    },
    {
      question: "What is the purpose of useEffect in React?",
      answer:
        "useEffect is a React hook used to handle side effects in functional components, such as fetching data, setting up subscriptions, or manipulating the DOM. It runs after render and can be configured to run only when specific dependencies change.",
      date: "February 8, 2025",
    },
    {
      question: "What is a custom hook in React and when should you use one?",
      answer:
        "A custom hook is a reusable function that encapsulates logic using built-in hooks like useState or useEffect. You should use custom hooks to avoid code repetition, keep components clean, and share logic across multiple components.",
      date: "March 22, 2025",
    },
    {
      question:
        "Difference between controlled and uncontrolled components. Which one is better?",
      answer:
        "Controlled components are form elements whose values are managed by React state, while uncontrolled components manage their own internal state and are accessed using refs. Controlled components are better for complex forms, while uncontrolled components are simpler for basic forms.",
      date: "April 15, 2025",
    },
    {
      question: "Tell us something about useFormStatus() in React.",
      answer:
        "useFormStatus() is a hook provided by React Router to track the state of form submissions. It helps determine if a form is submitting, idle, or errored, which allows showing loading indicators and preventing multiple submissions during form processing.",
      date: "May 9, 2025",
    },
  ];

  return (
    <div>
      {/* SectionTitle */}
      <div className="text-center">
        <h2 className="text-[#0F0F0F] text-[40px] font-extrabold">Blogs</h2>
        <p className="w-10/12 mx-auto">
          Explore insightful articles on legal topics, React development tips,
          and best practices. Stay informed, learn something new, and gain
          valuable knowledge to enhance your understanding of both law and
          technology.
        </p>
      </div>

      {/* BlogsContainer */}
      <div className="my-10 space-y-6 px-4 sm:px-6 lg:px-0">
        {blogQnA.map((blog, index) => (
          <div
            key={index}
            className="p-4 sm:p-6 bg-[#0F0F0F05] rounded-2xl border border-[#0F0F0F10]"
          >
            <h2 className="text-[#0F0F0F] text-lg sm:text-xl font-semibold border-b border-dashed border-[#0F0F0F15] pb-2 mb-2 sm:pb-4 sm:mb-4">
              {blog.question}
            </h2>
            <div className="border-b border-dashed border-[#0F0F0F15] pb-2 mb-2 sm:pb-4 sm:mb-4">
              <p className="text-[#176AE5] text-base sm:text-lg">Answer :</p>
              <span className="text-[#0F0F0F] text-base sm:text-lg">
                {blog.answer}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[#0F0F0F90] text-xs sm:text-sm">
              <CalendarHeart size={16} />
              <span>Added at {blog.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
