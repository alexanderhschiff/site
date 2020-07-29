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
        <h1>Contact</h1>
        <h1 className="rotate"></h1>

        <a
          href="https://drive.google.com/file/d/1j_wG2_nEnpp5biTORhysEWmw978wd99C/view?usp=sharing"
          target="_blank"
        >
          <RoughNotation
            onMouseEnter={() => setResume(true)}
            onMouseLeave={() => setResume(false)}
            type="circle"
            color="#ef4e2b"
            show={resume}
            strokeWidth={4}
          >
            Resume
          </RoughNotation>
        </a>

        <a href="https://www.linkedin.com/in/alexanderschiff" target="_blank">
          <RoughNotation
            onMouseEnter={() => setLinkedIn(true)}
            onMouseLeave={() => setLinkedIn(false)}
            type="underline"
            color="#f8f1e9"
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
            color="#003847"
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
            color="#f07b75"
            show={mail}
            strokeWidth={4}
          >
            Email
          </RoughNotation>
        </a>
      </div>
      <h4>I built this site with React and published it with AWS Amplify.</h4>
    </div>
  );
};

export default Contact;
