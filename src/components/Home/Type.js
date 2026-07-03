import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "PhD Student at HKUST",
          "Computer Vision Researcher",
          "Computer Graphics Explorer",
          "Vision Foundation Model Intern at NIO",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
