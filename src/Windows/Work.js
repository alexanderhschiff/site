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
            Created investment memos, due diligence reports, and market segment
            investment theses
          </li>
          <li>Met with dozens of investment-seeking startups a week</li>

          <h3>Birthright Excel Fellowship</h3>
          <li>
            10-week intensive fellowship engaging with distinguished Israeli
            leaders in the business, technology, political, and philanthropic
            worlds designed to foster leadership, innovation, Jewish identity,
            and teamwork
          </li>
          <li>
            Selected as one of 54 fellows from a distinguished pool of over
            2,500 applicants
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
            Developed in React front-end and Java backend for portfolio startups
            Wayapay and Galen Data
          </li>
          <li>Recruited startups for the IBM Hyper Protect Accelerator</li>
        </ul>

        <h2>
          Engineering Intern, Ring{" "}
          <span style={{ fontWeight: 400 }}>(aquired by Amazon)</span>
        </h2>
        <ul>
          <p>Los Angeles, CA &#8594; Summer 2017</p>
          <li>
            Wore many hats, learning firsthand what it takes to turn a{" "}
            <RoughNotation type="circle" color="pink" padding={10}>
              startup into a unicorn
            </RoughNotation>
          </li>
          <li>
            Collaborated with software and hardware engineering teams on new
            products
          </li>
        </ul>
      </RoughNotationGroup>
    </div>
  );
};

export default Work;
