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
      <h1>About</h1>
      <p>
        I'm a sophomore at Duke University studying Computer Science, Innovation
        & Entrepreneurship, and Psychology. I am passionate about harnessing the
        power of business and technology for good, thrive when collaborating and
        problem-solving, and put 100% into everything I do.
      </p>
    </div>
  );
};

export default About;
