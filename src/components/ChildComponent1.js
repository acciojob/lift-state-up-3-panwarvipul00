import React from "react";

function ChildComponent1({ onSelect }) {
  const style = {
    backgroundColor: "brown",
    color: "white",
    padding: "15px",
    marginBottom: "10px",
  };

  return (
    <div style={style}>
      <h2>Child Component 1</h2>
      <button onClick={() => onSelect("Option 1")}>Option 1</button>
    </div>
  );
}

export default ChildComponent1;
