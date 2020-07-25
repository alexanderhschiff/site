import React from "react";
import "../App.scss";

const About = ({ active, close }) => {
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
      <h1>About</h1>
      <p className={active ? ".red" : ".red"}>
        I'm a rising sophomore at Duke University studying Computer Science,
        Innovation & Entrepreneurship, and Psychology. I am passionate about
        harnessing the power of business and technology for good, thrive when
        collaborating and problem-solving, and put 100% into everything I do.
      </p>
    </div>
  );
};

export default About;
