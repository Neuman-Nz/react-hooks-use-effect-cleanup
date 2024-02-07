import React, { useState } from "react";
import Clock from "./Clock";

function App() {
  const [showClock, setShowClock] = useState(true);

  return (
    <div>
      {showClock && <Clock />}
      <button onClick={() => setShowClock(!showClock)}>Toggle Clock</button>
    </div>
  );
}

export default App;

