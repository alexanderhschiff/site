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
          CLOSE
        </button>
      )}
      <h1>Skills</h1>
      <h2>Technical</h2>
      <ul>
        <li>
          Proficient in Java, SwiftUI iOS App Development, Web Development
          (React, HTML, JavaScript, CSS), R, Git
        </li>
        <li>Knowledge in Python & C</li>
      </ul>
      <h2>Language</h2>
      <ul>
        <li>Proficient in Spanish</li>
      </ul>
      <h2>Interests</h2>
      <ul>
        <li>Running (ran my first half-marathon last year)</li>
        <li>Cooking (auditioned for MasterChef Junior)</li>
        <li>Drones, VR, and music</li>
      </ul>
    </div>
  );
};

export default Skils;
