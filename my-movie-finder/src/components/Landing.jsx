import React from "react";

function Landing({ onGetStarted }) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/background.png')", 
      }}
    >
      
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 text-center">
        <div className="mb-6">
          <img
            src="/movie-logo.png3"
            alt="Movie Finder Logo"
            className="w-28 h-28 mx-auto drop-shadow-lg"
          />
        </div>

        <h1 className="text-5xl font-extrabold mb-2 tracking-wide">MovieFinder</h1>
        <p className="text-lg mb-6 opacity-90">Search movies instantly with the OMDb</p>

        <button
          onClick={onGetStarted}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Landing;
