import React, { useState } from "react";
import Landing from "./components/Landing";
import Search from "./components/Search";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="container mx-auto p-4">
      {!started ? (
        <Landing onStart={() => setStarted(true)} />
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-4 text-center">Movie Finder</h1>
          <Search />
        </div>
      )}
    </div>
  );
}

export default App;
