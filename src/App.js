import React, { useEffect, useState } from "react";
import "./App.scss";
import Education from "./Windows/Education";
import Work from "./Windows/Work";
import Projects from "./Windows/Projects";
import About from "./Windows/About";
import Skils from "./Windows/Skills";

const App = () => {
  const initialCoords = [
    { id: "about", y: 1, z: 1000, active: false },
    { id: "education", y: 150, z: 1001, active: false },
    { id: "work", y: 300, z: 1002, active: false },
    { id: "projects", y: 450, z: 1003, active: false },
    { id: "skills", y: 600, z: 1004, active: false },
  ];

  const renderSwitch = (id, active) => {
    switch (id) {
      case "about":
        return <About active={active} close={() => selected(id)}></About>;
      case "education":
        return (
          <Education active={active} close={() => selected(id)}></Education>
        );
      case "work":
        return <Work active={active} close={() => selected(id)}></Work>;
      case "projects":
        return <Projects active={active} close={() => selected(id)}></Projects>;
      case "skills":
        return <Skils active={active} close={() => selected(id)}></Skils>;
    }
  };

  const [coords, setCoords] = useState(initialCoords);

  // useEffect(() => {
  //   window.addEventListener("wheel", scroll);
  //   window.addEventListener("touchmove", scroll);
  // });

  const [saveY, setSaveY] = useState(0);
  const [saveZ, setSaveZ] = useState(0);

  const selected = (id) => {
    const newCoords = coords.map((item) => {
      if (item.id == id) {
        if (item.active) {
          return { ...item, y: saveY, z: saveZ, active: !item.active };
        }
        setSaveY(item.y);
        setSaveZ(item.z);
        return { ...item, y: 0, z: 3000, active: !item.active };
      }
      return { ...item };
    });
    setCoords(newCoords);
  };

  const scroll = (e) => {
    var active = false;
    coords.forEach((item) => {
      if (item.active) {
        active = true;
      }
    });

    // if (active) {
    //   const newCoords = coords.map((item) => {
    //     if (item.active) {
    //       return {
    //         id: item.id,
    //         y: item.y - e.deltaY,
    //         z: item.z,
    //         active: item.active,
    //       };
    //     }
    //     return item;
    //   });
    //   setCoords(newCoords);
    // }

    if (!active) {
      e.preventDefault();
      const newCoords = coords.map((item) => {
        //hit the top, send to the bottom (and highest z)
        // console.log(item.id + item.y);
        if (item.y < -100) {
          return {
            id: item.id,
            y: window.innerHeight,
            z: item.z + 10,
            active: item.active,
          };
        }
        //hit the bottom, send to the top
        if (item.y > window.innerHeight) {
          return {
            id: item.id,
            y: -100,
            z: item.z - 10,
            active: item.active,
          };
        }
        //regular scrolling
        return {
          id: item.id,
          y:
            item.y -
            (item.y * 0.7 + window.innerHeight * 0.5) * 0.001 * e.deltaY,
          z: item.z,
          active: item.active,
        };
      });

      setCoords(newCoords);
    }
  };

  return (
    <div onWheel={scroll} className="main">
      <div className="scrollView">
        {coords.map((item) => (
          <div
            style={{
              transform: `translateY(${item.y}px)`,
              zIndex: item.z,
            }}
            onClick={() => {
              if (!item.active) {
                selected(item.id);
              }
            }}
            className={item.active ? "active" : "inactive"}
          >
            {renderSwitch(item.id, item.active)}
          </div>
        ))}
      </div>
      <div className="sidebar">
        <div>
          <div className="rotate">
            <h1>Alexander Schiff</h1>
          </div>

          <div className="contact">
            <h1>Contact</h1>
            <a
              href="https://drive.google.com/file/d/1j_wG2_nEnpp5biTORhysEWmw978wd99C/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/alexanderschiff"
              target="_blank"
            >
              LinkedIn
            </a>
            <a href="mailTo:alexanderschiff@icloud.com">Email Me</a>
            <a id="callme" onclick="number()">
              Call Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
