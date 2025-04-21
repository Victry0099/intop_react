import React, { useState } from "react";
import RegistrationFormPopup from "../Components/RegistrationFormPopup";
import AnimatedText from "../Components/AnimatedText";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className=" bg-white mb-20">
        {/* Logo */}

        <div>
          <img
            src="/intop-logo.webp"
            alt="Intop Digital"
            className="w-20 sm:w-40 md:w-26 lg:w-30 xl:w-38 mb-10 mt-5"
          />
        </div>

        <div className="flex flex-col items-center justify-center px-4 text-center">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#1F0C4F] mb-4">
            UPGRADING
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
            We will be celebrating the launch of our new site very soon!
          </p>

          {/* Connect Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-blue-500 to-indigo-900 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
          >
            Connect
          </button>
        </div>
      </section>

      {/* Section: Let's have a chat */}
      <section className=" bg-white flex flex-col items-center justify-center px-4 ">
        <div>
          <p className="text-base sm:text-lg text-gray-800">
            Want to start a project?
          </p>
          <div className="text-4xl md:text-6xl lg:text-9xl font-bold leading-tight mb-6">
            <AnimatedText text="Let’s have a chat" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Connect Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-blue-500 to-indigo-900 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
          >
            Connect
          </button>

          {/* Arrow Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="border-2 border-blue-500 text-blue-600 rounded-full p-3 hover:bg-blue-50 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Popup Modal */}
      <RegistrationFormPopup
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Home;
