import React from "react";

function Landing({ onGetStarted }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center 
                    bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-800 text-white">
      
      <div className="mb-6">
        <img
          src="/movie-logo.png" 
          alt="Movie Finder Logo"
          className="w-28 h-28 mx-auto drop-shadow-lg"
        />
      </div>

      <h1 className="text-5xl font-extrabold mb-2 tracking-wide">MovieFinder</h1>
      <p className="text-lg mb-6 opacity-90">Search movies instantly with the OMDb API</p>

      <button
        onClick={onGetStarted}   
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
      >
        Get Started
      </button>
    </div>
  );
}

export default Landing;
