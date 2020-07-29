import React, { useState } from "react";
import "../App.scss";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

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
      <RoughNotationGroup show={active}>
        <h2>Technical</h2>
        <ul>
          <li>
            Proficient in{" "}
            <RoughNotation type="underline" strokeWidth={4}>
              Java
            </RoughNotation>
            , SwiftUI{" "}
            <RoughNotation type="box" padding={10} color="navy">
              iOS App Development
            </RoughNotation>
            ,
            <RoughNotation
              type="underline"
              color="pink"
              strokeWidth={4}
              multiline={true}
            >
              Web Development (React, HTML, JavaScript, CSS)
            </RoughNotation>
            , R, Git
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
      </RoughNotationGroup>
    </div>
  );
};

export default Skils;
