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
          I'm a junior at Duke University studying{" "}
          <RoughNotation
            type="highlight"
            padding={4}
            color="#fdcf4777"
            multiline={true}
            padding={12}
          >
            Computer Science, Innovation & Entrepreneurship, and Psychology.
          </RoughNotation>{" "}
          I am ambitious, passionate about harnessing the power of{" "}
          <RoughNotation
            multiline={true}
            type="underline"
            color="#ff000099"
            strokeWidth={5}
          >
            business and technology for good
          </RoughNotation>
          , and thrive when{" "}
          <RoughNotation type="bracket" brackets={["left", "right"]} strokeWidth={6} color="#af70ff77">
            collaborating and problem-solving.
          </RoughNotation>
          <br></br>
          <br></br>
          As an Engineering Intern at Ring, I teamed up with engineers, spoke up
          with my ideas, and saw firsthand what it takes to{" "}
          <RoughNotation type="highlight" color="#00cf4777">
            turn a startup into a unicorn
          </RoughNotation>
          , learning new technical and professional skills while contributing to
          the flagship product line (Ring Video Doorbell, Spotlight Cam,
          Floodlight Cam). As a Software Engineering Intern at IBM, I honed
          these abilities as I worked on front- and back- end applications in
          React and Java while also helping the IBM Hyper Protect Accelerator
          recruit its next cohort of startups. This past summer as a VC Intern
          at MizMaa Ventures,{" "}
          <RoughNotation type="highlight" color="#1155ff77">
            I participated in nearly 100 pitches
          </RoughNotation>
          , conducted due-diligence on potential investments, and created market
          theses for future investment opportunities. Through each of these
          experiences, I{" "}
          <RoughNotation type="highlight" color="#55a69977">
            maximized the opportunity to learn from the best and brightest in
            their fields
          </RoughNotation>{" "}
          by applying my ambitious work ethic, relevant coursework and
          experience, and sharp interpersonal skills to be a superstar teammate.
        </p>
        <p style={{ paddingBottom: 200 }}></p>
      </RoughNotationGroup>
    </div>
  );
};

export default About;
