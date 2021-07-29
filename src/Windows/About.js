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
          type="underline"
          strokeWidth={5}
          color={"navy"}
        >
          About
        </RoughNotation>
      </h1>
      <hr></hr>
      <RoughNotationGroup show={active}>
        <p>
          I'm a junior at{" "}
          <RoughNotation
            type="circle"
            padding={4}
            color="blue"
            multiline={true}
            padding={12}
          >
            Duke University
          </RoughNotation>{" "}
          studying Computer Science, Innovation & Entrepreneurship, and
          Psychology. I am ambitious, passionate about harnessing the power of{" "}
          <RoughNotation
            multiline={true}
            type="underline"
            color="#ff000099"
            strokeWidth={5}
          >
            business and technology for good
          </RoughNotation>
          , and thrive when{" "}
          <RoughNotation type="highlight" color="#af70ff77">
            collaborating
          </RoughNotation>{" "}
          and problem-solving.
          <br></br>
          <br></br>
          As an Engineering Intern at Ring, I teamed up with engineers, spoke up
          with my ideas, and saw firsthand what it takes to turn a startup into
          a unicorn, learning new technical and professional skills while
          contributing to the flagship product line. As a Software Engineering
          Intern at IBM, I honed these abilities as I worked on front- and back-
          end applications in React and Java while also helping the IBM Hyper
          Protect Accelerator recruit its next cohort of startups. This past
          summer as a VC Intern at MizMaa Ventures, I participated in dozens of
          pitches a week, conducted due-diligence on potential investments, and
          created market theses for future investment opportunities. Through
          each of these experiences, I maximized the opportunity to learn from
          the best and brightest in their fields by applying my ambitious work
          ethic, relevant coursework and experience, and sharp interpersonal
          skills to be a superstar teammate.
        </p>
        <p style={{ paddingBottom: 200 }}></p>
      </RoughNotationGroup>
    </div>
  );
};

export default About;
