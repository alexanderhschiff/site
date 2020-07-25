import React from "react";
import "../App.scss";

const Projects = ({ active, close }) => {
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
      <h1>Projects</h1>

      <h4>App Developer, Shoo - Stop Interruptions</h4>

      <ul>
        <p>Released June 2020</p>
        <li>
          Designed and coded every element of the app, collaborating with my
          twin brother
        </li>
        <li>
          Incoroporated myriad accessibility features, dark mode, QR-code to add
          friends, push notifications, and more
        </li>
        <li>
          <a /*style="color: black;" href="https://www.shoo.app" target="_blank" */
          >
            Download
          </a>
        </li>
      </ul>

      <h4>Team Leader, Tesla Consulting Competition</h4>
      <ul>
        <p>April 2019</p>
        <li>
          Proposed a viable technical solution as well as a sound business plan
          for how to charge electric cars in urban environments
        </li>
        <li>
          Ensured team was on the same page, delegated tasks, won the
          competition
        </li>
        <li>
          <a
            href="https://drive.google.com/open?id=1tV3FozJGYltm5tUP7nt17mJzFhFbaPPT"
            target="_blank"
          >
            Winning Submission
          </a>
        </li>
      </ul>

      <h4>Team Leader, Netflix and Bain & Co. Consulting Competition</h4>
      <ul>
        <p>May 2018</p>
        <li>
          Conducted research to empathize with target audience and develop an
          ideal solution
        </li>
        <li>Collaborated with consultants at Bain & Co. and UCLA students</li>
      </ul>
    </div>
  );
};

export default Projects;
