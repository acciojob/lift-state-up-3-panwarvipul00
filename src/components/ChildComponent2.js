import React from "react";

function ChildComponent2({ onSelect }) {
  const style = {
    backgroundColor: "orange",
    color: "black",
    padding: "15px",
  };

  return (
    <div style={style}>
      <h2>Child Component 2</h2>
      <button onClick={() => onSelect("Option 2")}>Option 2</button>
    </div>
  );
}

export default ChildComponent2;
