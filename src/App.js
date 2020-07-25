import React, { useEffect, useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

import "./App.scss";
import Education from "./Windows/Education";
import Work from "./Windows/Work";
import Projects from "./Windows/Projects";
import About from "./Windows/About";
import Skils from "./Windows/Skills";
import Contact from "./Windows/Contact";

const App = () => {
  const initialCoords = [
    { id: "about", y: 1, z: 1000, active: false },
    { id: "education", y: 150, z: 1001, active: false },
    { id: "work", y: 300, z: 1002, active: false },
    { id: "projects", y: 450, z: 1003, active: false },
    { id: "skills", y: 600, z: 1004, active: false },
    { id: "contact", y: 750, z: 1005, active: false },
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
      case "contact":
        return (
          <Contact
            active={active}
            close={() => selected(id)}
            style={{ top: "2vh" }}
          ></Contact>
        );
    }
  };

  const [coords, setCoords] = useState(initialCoords);

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

  const [start, setStart] = useState(0);
  const [offset, setOffset] = useState(0);
  const [wheelBool, setWheel] = useState(false);
  const touchstart = (e) => {
    setWheel(false);
    setStart(e.touches[0].pageY);
  };

  const touchmove = (e) => {
    setOffset(start.y - e.touches[0].pageY);
    scroll(e);
  };

  const yScroll = (e, y) => {
    if (wheelBool) {
      return y - (y * 0.7 + window.innerHeight * 0.5) * 0.001 * e.deltaY;
    }
    return y - offset;
  };

  const scroll = (e) => {
    var active = false;
    coords.forEach((item) => {
      if (item.active) {
        active = true;
      }
    });

    if (!active) {
      setWheel(true);
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
          y: yScroll(e, item.y),
          z: item.z,
          active: item.active,
        };
      });

      setCoords(newCoords);
    }
  };

  return (
    <div
      onWheel={scroll}
      onTouchStart={touchstart}
      onTouchMove={touchmove}
      className="main"
    >
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
        <h1>Alexander Schiff</h1>
        <Contact style={{ bottom: "6vh" }}></Contact>
      </div>
    </div>
  );
};

export default App;
