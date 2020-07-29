import React, { useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import "../App.scss";

const Education = ({ active, close }) => {
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
      <div>
        <h1>Education</h1>
      </div>
      <RoughNotationGroup show={active}>
        <h2>
          <RoughNotation type="highlight" color="#1868b3" strokeWidth={3}>
            Duke University
          </RoughNotation>
        </h2>
        <ul>
          <li>Expected graduation in May 2023</li>
          <li>
            Intended major in{" "}
            <RoughNotation
              type="underline"
              color="red"
              strokeWidth={2}
              padding={0}
            >
              Computer Science
            </RoughNotation>
            , certificate in{" "}
            <RoughNotation
              type="underline"
              color="blue"
              padding={0}
              strokeWidth={1}
              multiline={true}
            >
              Innovation & Entrepreneurship
            </RoughNotation>
            , and a minor in{" "}
            <RoughNotation type="circle" padding={4}>
              Psychology
            </RoughNotation>
          </li>
          <li>3.8 GPA</li>
        </ul>
        <h3>Coursework</h3>
        <ul>
          <li>
            Computer Science:{" "}
            <RoughNotation type="box">
              Data Structures & Algorithms
            </RoughNotation>
            , Computer Architecture
          </li>
          <li>
            <RoughNotation type="circle" color="green" padding={4}>
              Linear Algebra
            </RoughNotation>
            : Matrices & Vector Spaces, Python-based applied lab
          </li>
          <li>
            Statistics:{" "}
            <RoughNotation type="highlight" color="pink">
              Data Science, using R
            </RoughNotation>
          </li>
          <li>Innovation & Entrepreneurship: Innovator's Workshop</li>
        </ul>
        <h3>Activities and Societies</h3>
        <ul>
          <li>Duke Student Founders</li>
          <li>Delta Sigma Pi Business Fraternity</li>
          <li>Club Running</li>
          <li>Club Sailing</li>
          <li>Sigma Phi Epsilon</li>
          <li>Jewish Learning Fellowship</li>
        </ul>
        <h2>Brentwood High School</h2>
        <ul>
          <li>Graduated Cum Laude in 2019</li>
        </ul>
      </RoughNotationGroup>
    </div>
  );
};

export default Education;
