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
      <h1>
        <RoughNotation show={!active} type="highlight" color="#ff00007f">
          Education
        </RoughNotation>
      </h1>
      <hr></hr>
      <RoughNotationGroup show={active}>
        <h2>
          <RoughNotation
            type="highlight"
            color="#0000ff7f"
            strokeWidth={3}
            multiline={true}
          >
            Duke University
          </RoughNotation>
        </h2>
        <ul>
          <li>Expected graduation in May 2023</li>
          <li>
            Major in{" "}
            <RoughNotation
              type="underline"
              color="red"
              strokeWidth={2}
              padding={0}
              multiline={true}
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
            , and minor in{" "}
            <RoughNotation type="circle" padding={4}>
              Psychology
            </RoughNotation>
          </li>
          <li>3.8 GPA</li>
        </ul>
        <h3>Coursework</h3>
        <ul>
          <li>
            Computer Science: Data Structures & Algorithms,{" "}
            <RoughNotation type="box" color="blue" multiline={true}>
              Computer Architecture,{" "}
            </RoughNotation>
            Design and Analysis of Algorithms,{" "}
            <RoughNotation type="circle" color="red" multiline={true}>
              Discrete Math,
            </RoughNotation>{" "}
            <RoughNotation type="underline" color="green" multiline={true}>
              Computational Biology,
            </RoughNotation>
            Analysis of Algorithms, Database Systems
          </li>
          <li>
            <RoughNotation
              type="circle"
              color="blue"
              padding={7}
              multiline={true}
            >
              Linear Algebra
            </RoughNotation>
            : Matrices & Vector Spaces, Python-based applied lab
          </li>
          <li>
            Statistics:{" "}
            <RoughNotation type="highlight" color="#FFC0CB7f" multiline={true}>
              Data Science, using R
            </RoughNotation>
          </li>
          <li>
            Innovation & Entrepreneurship: Innovator's Workshop, Customer
            Empathy & Brand Design, New Ventures: Development (Duke's Fuqua
            School of Business)
          </li>
        </ul>
        <h3>Activities and Societies</h3>
        <ul>
          <li>Duke Student Founders</li>
          <li>Jewish Learning Fellowship</li>
          <li>#GetCooking culinary course</li>
          <li>Delta Sigma Pi Business Fraternity</li>
          <li>Club Running</li>
          <li>Club Sailing</li>
          <li>Duke Conversations</li>
        </ul>
        <h2>Brentwood High School</h2>
        <ul>
          <li>Graduated Cum Laude in 2019</li>
          <li>4.49/4.0 Cumulative GPA</li>
          <li>National Mertit Commended Scholar, National AP Scholar</li>
          <li>ACT Score: 35</li>
        </ul>
      </RoughNotationGroup>
    </div>
  );
};

export default Education;
