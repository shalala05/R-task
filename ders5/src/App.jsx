import React from "react";
import Dice from "./Dice";

const App = () => {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <Dice />
      <Dice />
    </div>
  );
};

export default App;