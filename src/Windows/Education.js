import React from "react";
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
          Active
        </button>
      )}
      <h1>Education</h1>
      <h3>Duke University</h3>
      <ul>
        <li>Expected graduation in May 2023</li>
        <li>
          Intended major in Computer Science, certificate in Innovation &
          Entrepreneurship, and a minor in Psychology
        </li>
        <li>3.8 GPA</li>
      </ul>
      <h4>Coursework</h4>
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
      <h4>Activities and Societies</h4>
      <ul>
        <li>Duke Student Founders</li>
        <li>Delta Sigma Pi Business Fraternity</li>
        <li>Club Running</li>
        <li>Club Sailing</li>
        <li>Sigma Phi Epsilon</li>
        <li>Jewish Learning Fellowship</li>
      </ul>
      <h3>Brentwood High School</h3>
      <ul>
        <li>Graduated Cum Laude in 2019</li>
      </ul>
    </div>
  );
};

export default Education;
