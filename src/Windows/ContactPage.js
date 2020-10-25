import React, { useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import "../App.scss";
import animoji from "../Images/animoji.png";

const ContactPage = ({ active, close }) => {
  //contact highlights
  const [resume, setResume] = useState(false);
  const [linkedin, setLinkedIn] = useState(false);
  const [github, setGitHub] = useState(false);
  const [mail, setMail] = useState(false);

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
        <h1>
          <RoughNotation show={!active} type="box" padding={10} color="pink">
            Contact
          </RoughNotation>
        </h1>
        <hr></hr>
        <img src={animoji} style={{ width: "50%", paddingLeft: "25%" }} />
        <div className="grid">
          <a
            href="https://drive.google.com/file/d/1o6ztMBKtc_emPmQkoWx4-SXB1cDglukF/view?usp=sharing"
            target="_blank"
          >
            <RoughNotation
              onMouseEnter={() => setResume(true)}
              onMouseLeave={() => setResume(false)}
              type="circle"
              color="blue"
              show={resume}
              strokeWidth={4}
              padding={5}
            >
              Resume
            </RoughNotation>
          </a>
          <a href="https://www.linkedin.com/in/alexanderschiff" target="_blank">
            <RoughNotation
              onMouseEnter={() => setLinkedIn(true)}
              onMouseLeave={() => setLinkedIn(false)}
              type="underline"
              color="red"
              show={linkedin}
              strokeWidth={4}
            >
              LinkedIn
            </RoughNotation>
          </a>
          <a href="https://github.com/alexanderhschiff" target="_blank">
            <RoughNotation
              onMouseEnter={() => setGitHub(true)}
              onMouseLeave={() => setGitHub(false)}
              type="highlight"
              color="#00ff227f"
              show={github}
            >
              GitHub
            </RoughNotation>
          </a>
          <a href="mailTo:alexanderschiff@icloud.com">
            <RoughNotation
              onMouseEnter={() => setMail(true)}
              onMouseLeave={() => setMail(false)}
              type="box"
              color="orange"
              show={mail}
              strokeWidth={4}
            >
              Email
            </RoughNotation>
          </a>
          <h4>
            I built this site with React and published it with AWS Amplify.
            Animation library from{" "}
            <a style={{ color: "#222233" }} href="https://roughnotation.com">
              Rough Notation
            </a>
            .
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
