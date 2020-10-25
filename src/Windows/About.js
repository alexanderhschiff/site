import React from "react";
import "../App.scss";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const About = ({ active, close }) => {
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
        <RoughNotation
          show={!active}
          type="circle"
          strokeWidth={5}
          padding={10}
        >
          About
        </RoughNotation>
      </h1>
      <hr></hr>
      <RoughNotationGroup show={active}>
        <p>
          I'm a sophomore at{" "}
          <RoughNotation
            type="circle"
            padding={4}
            color="blue"
            multiline={true}
            padding={8}
          >
            Duke University
          </RoughNotation>{" "}
          studying Computer Science, Innovation & Entrepreneurship, and
          Psychology. I am ambitious, passionate about harnessing the power of{" "}
          <RoughNotation
            multiline={true}
            type="underline"
            color="#ff0000"
            strokeWidth={5}
          >
            business and technology for good
          </RoughNotation>
          , and thrive when{" "}
          <RoughNotation type="highlight" color="#af70ff7f">
            collaborating
          </RoughNotation>{" "}
          and problem-solving.
        </p>
      </RoughNotationGroup>
    </div>
  );
};

export default About;
