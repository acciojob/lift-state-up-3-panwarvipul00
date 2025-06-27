
import React, { useState } from "react";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

function App() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const parentStyle = {
    backgroundColor: "limegreen",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div className="parent" style={parentStyle}>
      <h1>Parent Component</h1>
      <ChildComponent1 onSelect={handleOptionSelect} />
      <ChildComponent2 onSelect={handleOptionSelect} />
      <p><strong>Selected Option:</strong> {selectedOption || "None"}</p>
    </div>
  );
}

export default App;
