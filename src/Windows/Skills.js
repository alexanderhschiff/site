import React, { useState } from "react";
import "../App.scss";

const Skils = ({ active, close }) => {
  return (
    <div>
      {active && (
        <button
          onClick={() => {
            close();
          }}
        >
          Active
        </button>
      )}
      <h1>Skills</h1>
      <h3>Technical</h3>
      <ul>
        <li>
          Proficient in Java, SwiftUI iOS App Development, Web Development
          (React, HTML, JavaScript, CSS), R, Git
        </li>
        <li>Knowledge in Python & C</li>
      </ul>
      <h3>Language</h3>
      <ul>
        <li>Proficient in Spanish</li>
      </ul>
      <h3>Interests</h3>
      <ul>
        <li>Running (ran my first half-marathon last year)</li>
        <li>Cooking (auditioned for MasterChef Junior)</li>
        <li>Drones, VR, and music</li>
      </ul>
    </div>
  );
};

export default Skils;
