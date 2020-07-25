import React from "react";
import "../App.scss";

const Work = ({ active, close }) => {
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
      <h1>Work</h1>
      <h2>Software Engineering Intern, IBM</h2>
      <ul>
        <p>Remote - Summer 2020</p>
        <li>
          Built out a React web application with partnering fintech startup
          Wayapay
        </li>
        <li>
          Supported startup recruitment for the IBM Hyper Protect Accelerator
        </li>
      </ul>

      <h2>
        Engineering Intern, Ring
        <i>(aquired by Amazon)</i>
      </h2>
      <ul>
        <p>Los Angeles, CA - Summer 2017</p>
        <li>
          Collaborated with software development teams to find and fix bugs
        </li>
      </ul>

      <h2>Counselor & Lifeguard, Camp Manitou</h2>
      <ul>
        <p>Oakland, Maine - Summers of 2018 and 2019</p>
        <li>Lived with and cared for a bunk of 15 nine-year-olds</li>
        <li>
          Taught waterskiing and collaborated with the team of lifeguards to
          ensure a safe waterfront
        </li>
      </ul>

      <h2>Co-Founder, Alex & Teddy&#39;s Academy of Code</h2>
      <ul>
        <p>2016-2019</p>
        <li>Taught over 100 students how to code in 3 different languages</li>
      </ul>

      <h2>Co-Founder, a&b granola L.L.C.</h2>
      <ul>
        <p>2012-2019</p>
        <li>
          Started and ran a fully licensed, insured, and permitted food services
          company
        </li>
        <li>Sold granola at local restaurants as well as via our website</li>
      </ul>
    </div>
  );
};

export default Work;
