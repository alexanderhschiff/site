import React, { useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import "../App.scss";

const Education = ({ active, close }) => {
  const [circle, setCircle] = useState(false);
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
        <RoughNotation
          onMouseEnter={() => setCircle(true)}
          onMouseLeave={() => setCircle(false)}
          type="underline"
          color="red"
          show={circle}
          strokeWidth={4}
        >
          <h1>Education</h1>
        </RoughNotation>
      </div>

      <h2>Duke University</h2>
      <ul>
        <li>Expected graduation in May 2023</li>
        <li>
          Intended major in Computer Science, certificate in Innovation &
          Entrepreneurship, and a minor in Psychology
        </li>
        <li>3.8 GPA</li>
      </ul>
      <h3>Coursework</h3>
      <ul>
        <li>
          Computer Science: Data Structures & Algorithms, Computer Architecture
        </li>
        <li>
          Linear Algebra: Matrices & Vector Spaces, Python-based applied lab
        </li>
        <li>Statistics: Data Science, using R</li>
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
    </div>
  );
};

export default Education;
