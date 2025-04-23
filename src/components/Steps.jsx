import React, { useState } from "react";
import "../index.css";

const Steps = () => {
  const [steps, setSteps] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  //   console.log(steps);

  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];
  return (
    <>
      <button
        className="close"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${steps >= 1 ? "active" : ""}`}>1</div>
            <div className={`${steps >= 2 ? "active" : ""}`}>2</div>
            <div className={`${steps >= 3 ? "active" : ""}`}>3</div>
          </div>
          <div className="message">
            Step {steps} : {messages[steps - 1]}
          </div>
          <div className="buttons">
            <button
              style={{ background: "#7950f2", color: "white" }}
              onClick={() => {
                if (steps >= 2) setSteps((step) => step - 1);
              }}
            >
              Previous
            </button>
            <button
              style={{ background: "#7950f2", color: "white" }}
              onClick={() => {
                if (steps <= 2) setSteps((step) => step + 1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Steps;
