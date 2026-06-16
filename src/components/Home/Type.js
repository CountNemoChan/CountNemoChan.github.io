import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "MPhil Student at HKUST",
          "Computer Vision Researcher",
          "Computer Graphics Explorer",
          "World Model Intern at Meituan",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
