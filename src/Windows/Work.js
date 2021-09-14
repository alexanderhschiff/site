import React from "react";
import "../App.scss";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Work = ({ active, close }) => {
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
          type="bracket"
          brackets={["right", "left"]}
          color="orange"
          strokeWidth={5}
        >
          Work
        </RoughNotation>
      </h1>
      <hr></hr>

      <RoughNotationGroup show={active}>
        <h2>
          <RoughNotation
            type="underline"
            color="#00dd77aa"
            multiline={true}
            strokeWidth={9}
          >
            Venture Capital Intern at MizMaa Ventures and Birthright Excel
            Fellow
          </RoughNotation>
        </h2>
        <ul>
          <p>Tel Aviv, Israel &#8594; Summer 2021</p>
          <li>
            Created investment memos and diligence reports: e.g. for a data
            pipeline solution & a mockup-to-code startup
          </li>
          <li>
            Developed market segment investment theses with a focus on the rise
            of machine learning
          </li>
          <li>
            Participated in pitches with nearly 100 investment-seeking software
            startups
          </li>

          <h3>Birthright Excel Fellowship</h3>
          <li>
            Selected as one of 56 fellows from a pool of thousands to
            participate in a 10- week intensive leadership fellowship engaging
            with Israeli trailblazers in technology, business, and politics
          </li>
        </ul>

        <h2>
          <RoughNotation type="highlight" color="#0000dd66">
            Software Engineering Intern, IBM
          </RoughNotation>
        </h2>
        <ul>
          <p>Remote &#8594; Summer 2020</p>
          <li>
            Transitioned a Java backend from AWS to IBM Cloud, working with and
            learning from senior cloud architects
          </li>
          <li>
            Implemented React hooks and function components for a financial
            payments front-end
          </li>
          <li>
            Sourced software startups for the next cohort of the IBM Hyper
            Protect Accelerator
          </li>
        </ul>

        <h2>
          Engineering Intern, Ring{" "}
          <span style={{ fontWeight: 400 }}>(aquired by Amazon)</span>
        </h2>
        <ul>
          <p>Los Angeles, CA &#8594; Summer 2017</p>
          <li>
            <RoughNotation type="circle" color="pink" padding={10}>
              Collaborated with software and hardware teams to develop the
              Doorbell, Floodlight Cam, and Spotlight Cam
            </RoughNotation>
          </li>
          <li>
            Managed beta testers of pre-release Ring Spotlight Cam and
            communicated with QA and engineering teams
          </li>
        </ul>
      </RoughNotationGroup>
    </div>
  );
};

export default Work;
