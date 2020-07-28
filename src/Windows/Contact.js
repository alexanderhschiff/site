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
        <h1 style={{ margin: "0", padding: "5%" }}>Contact</h1>
        <h1 className="rotate" style={{ margin: "0", padding: "5%" }}></h1>
        <div style={{ margin: "0", padding: "5%" }}>
          <RoughNotation
            onMouseEnter={() => setResume(true)}
            onMouseLeave={() => setResume(false)}
            type="circle"
            color="#ef4e2b"
            show={resume}
            padding={[18, 13, 5, 13]}
            strokeWidth={4}
          >
            <a
              href="https://drive.google.com/file/d/1j_wG2_nEnpp5biTORhysEWmw978wd99C/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </RoughNotation>
        </div>
        <div style={{ margin: "0", padding: "5%" }}>
          <RoughNotation
            onMouseEnter={() => setLinkedIn(true)}
            onMouseLeave={() => setLinkedIn(false)}
            type="underline"
            color="#f8f1e9"
            show={linkedin}
            padding={4}
            strokeWidth={4}
          >
            <a
              href="https://www.linkedin.com/in/alexanderschiff"
              target="_blank"
            >
              LinkedIn
            </a>
          </RoughNotation>
        </div>
        <div style={{ margin: "0", padding: "5%" }}>
          <RoughNotation
            onMouseEnter={() => setGitHub(true)}
            onMouseLeave={() => setGitHub(false)}
            type="highlight"
            padding={4}
            color="#003847"
            show={github}
          >
            <a href="https://github.com/alexanderhschiff" target="_blank">
              GitHub
            </a>
          </RoughNotation>
        </div>
        <div style={{ margin: "0", padding: "5%" }}>
          <RoughNotation
            onMouseEnter={() => setMail(true)}
            onMouseLeave={() => setMail(false)}
            type="box"
            color="#f07b75"
            show={mail}
            padding={[15, 10, 5, 10]}
            strokeWidth={4}
          >
            <a href="mailTo:alexanderschiff@icloud.com">Email Me</a>
          </RoughNotation>
        </div>
      </div>
    </div>
  );
};

export default Contact;
