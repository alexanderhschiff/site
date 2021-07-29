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
              Incorporated myriad accessibility features, dark mode, QR-code to
              add friends, push notifications, and more
            </RoughNotation>
          </li>

          <li>
            <a
              href="https://www.shoo.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RoughNotation type="box" multiline={false}>
                Download
              </RoughNotation>
            </a>
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
            Worked also with housing insecure children, teaching computer
            literacy and coding basics
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

        <h2>
          BlackRock Asset Allocation Competition and Wells Fargo Valuation
          Competition
        </h2>
        <ul>
          <p>November 2020</p>
          <li>
            One of only a few groups to be finalists in both competitions, each
            with 90+ teams competing
          </li>
        </ul>

        <h2>Team Leader, Tesla Consulting Competition</h2>
        <ul>
          <p>April 2019</p>
          <li>
            Proposed a winning technical solution and business plan for charging
            electric cars in urban environments
          </li>
          <li>
            <RoughNotation type="highlight" color="#ff00007f">
              <a
                href="https://drive.google.com/open?id=1tV3FozJGYltm5tUP7nt17mJzFhFbaPPT"
                target="_blank"
                rel="noopener noreferrer"
              >
                Winning Submission
              </a>
            </RoughNotation>
          </li>
        </ul>

        <h2>Team Leader, Netflix and Bain & Co. Consulting Competition</h2>
        <ul>
          <p>April - May 2018</p>
          <li>
            Conducted research to empathize with target audience and develop an
            ideal solution
          </li>
          <li>
            Closely collaborated with and learned from Bain & Company
            consultants and UCLA students
          </li>
        </ul>
      </RoughNotationGroup>
    </div>
  );
};

export default Projects;
