import React, { useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import "../App.scss";

const Contact = ({ active, close }) => {
  //contact highlights
  const [resume, setResume] = useState(false);
  const [linkedin, setLinkedIn] = useState(false);
  const [github, setGitHub] = useState(false);
  const [mail, setMail] = useState(false);

  return (
    <div className=".contact">
      {active && (
        <button
          onClick={() => {
            close();
          }}
        >
          CLOSE
        </button>
      )}
      <div className="contactBox">
        <a
          href="https://drive.google.com/file/d/18gAvgyFTq-lP4x0Bd86eM-Bpgo-71-2X/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RoughNotation
            onMouseEnter={() => setResume(true)}
            onMouseLeave={() => setResume(false)}
            type="circle"
            color="blue"
            show={resume}
            strokeWidth={4}
            padding={10}
          >
            Resume
          </RoughNotation>
        </a>
        <a
          href="https://www.linkedin.com/in/alexanderschiff"
          target="_blank"
          rel="noopener noreferrer"
        >
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
        <a
          href="https://github.com/alexanderhschiff"
          target="_blank"
          rel="noopener noreferrer"
        >
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
          I built this site with React and published it through GitHub with AWS
          Amplify. Animation library from{" "}
          <a
            href="https://roughnotation.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rough Notation.
          </a>
        </h4>
      </div>
    </div>
  );
};

export default Contact;
