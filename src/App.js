import React from "react";

const api = {
  key:"b85eb9a3b3ce4a66a8b1334cf613b3f2",
  url:"http://api.openweathermap.org/data/2.5/forecast?"
}

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input className="search-bar" type="text" placeholder="Search City"/>
        </div>
      </main>
    </div>
  );
}

export default App;
