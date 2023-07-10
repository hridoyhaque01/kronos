import React from "react";

function Steps({ step, next, children }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p>step Step {step} of 5</p>
      </div>
      <div>
        <button></button>
        {/* {children } */}
        <button></button>
      </div>
    </div>
  );
}

export default Steps;
