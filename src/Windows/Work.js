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
          <RoughNotation type="highlight" color="#0000ff6f">
            Software Engineering Intern, IBM
          </RoughNotation>
        </h2>
        <ul>
          <p>Remote &#8594; Summer 2020</p>
          <li>
            Built out a
            <RoughNotation type="underline" color="red" multiline={true}>
              {" "}
              React web application{" "}
            </RoughNotation>
            with partnering fintech startup Wayapay
          </li>
          <li>
            Transitioned Java backend from AWS to IBM Cloud with partnering
            healthtech startup Galen Data
          </li>
          <li>
            Supported startup recruitment for the IBM Hyper Protect Accelerator
          </li>
        </ul>

        <h2>
          Engineering Intern, Ring{" "}
          <span style={{ fontWeight: 400 }}>(aquired by Amazon)</span>
        </h2>
        <ul>
          <p>Los Angeles, CA &#8594; Summer 2017</p>
          <li>
            Collaborated with{" "}
            <RoughNotation type="circle" color="green" padding={10}>
              software and hardware engineering teams
            </RoughNotation>
          </li>
          <li>Tested products and managed beta groups with the QA team</li>
        </ul>

        <h2>Counselor & Lifeguard, Camp Manitou</h2>
        <ul>
          <p>Oakland, Maine &#8594; Summers of 2018 and 2019</p>
          <li>Lived with and cared for a bunk of 15 nine-year-olds</li>
          <li>
            Taught waterskiing and collaborated with the team of lifeguards to
            ensure a safe waterfront
          </li>
        </ul>

        <h2>Co-Founder, Alex & Teddy&#39;s Academy of Code</h2>
        <ul>
          <p>2016-2019</p>
          <li>
            Started a company to{" "}
            <RoughNotation type="box" color="orange" padding={5}>
              teach over 100 students how to code
            </RoughNotation>{" "}
            in 3 different languages
          </li>
          <li>
            Worked with housing insecure children, teaching computer literacy
            and coding basics
          </li>
        </ul>

        <h2>Co-Founder, a&b granola L.L.C.</h2>
        <ul>
          <p>2012-2019</p>
          <li>
            Started and ran a fully{" "}
            <RoughNotation type="highlight" color="#ff00ff4f" padding={5}>
              licensed, insured, permitted, and profitable food services company
            </RoughNotation>
          </li>
          <li>Sold granola at local restaurants as well as via our website</li>
          <li>Donated proceeds to a local food bank</li>
        </ul>
      </RoughNotationGroup>
    </div>
  );
};

export default Work;
