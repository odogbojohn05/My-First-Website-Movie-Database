import React from "react";

function Landing({ onStart }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-700 text-white">
      
      <div className="mb-6">
        <img
          src="/movie-logo.png" 
          alt="Movie Finder Logo"
          className="w-24 h-24 mx-auto"
        />
      </div>

      
      <h1 className="text-4xl font-bold mb-2">MovieFinder</h1>
      <p className="text-lg mb-6">Search movies instantly with the OMDb API</p>

      
      <button
        onClick={onStart}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition"
      >
        Get Started
      </button>
    </div>
  );
}

export default Landing;
