import React from "react";
import "../App.scss";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Projects = ({ active, close }) => {
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
          type="highlight"
          iterations={4}
          color="#aaaaff7f"
        >
          Projects
        </RoughNotation>
      </h1>
      <hr></hr>
      <RoughNotationGroup show={active}>
        <h2>App Developer, Shoo - Stop Interruptions</h2>

        <ul>
          <p>Released June 2020</p>
          <li>
            Designed and coded every element of the app, collaborating with my
            twin brother
          </li>

          <li>
            <RoughNotation
              type="bracket"
              multiline={false}
              strokeWidth={5}
              color="green"
              brackets={["left", "right"]}
            >
              Incoroporated myriad accessibility features, dark mode, QR-code to
              add friends, push notifications, and more
            </RoughNotation>
          </li>

          <li>
            <a href="https://www.shoo.app" target="_blank">
              Download
            </a>
          </li>
        </ul>

        <h2>Team Leader, Tesla Consulting Competition</h2>
        <ul>
          <p>April 2019</p>
          <li>
            Proposed a viable technical solution as well as a sound business
            plan for how to charge electric cars in urban environments
          </li>
          <li>
            Ensured team was on the same page, delegated tasks, won the
            competition
          </li>
          <li>
            <RoughNotation type="highlight" color="#ff00007f">
              <a
                href="https://drive.google.com/open?id=1tV3FozJGYltm5tUP7nt17mJzFhFbaPPT"
                target="_blank"
              >
                Winning Submission
              </a>
            </RoughNotation>
          </li>
        </ul>

        <h2>Team Leader, Netflix and Bain & Co. Consulting Competition</h2>
        <ul>
          <p>May 2018</p>
          <li>
            Conducted research to empathize with target audience and develop an
            ideal solution
          </li>
          <li>Collaborated with consultants at Bain & Co. and UCLA students</li>
        </ul>
      </RoughNotationGroup>
    </div>
  );
};

export default Projects;
