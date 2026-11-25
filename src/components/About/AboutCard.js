import React from "react";

export default function AboutCard() {
  return (
    <div className="bio intro-text">
      <h2>Know Who I Am</h2>
      <p>
        I’m a second-year PhD candidate at{" "}
        <a
          href="https://ais.hkust.edu.hk/"
          target="_blank"
          rel="noreferrer"
        >
          Academy of Interdisciplinary Studies
        </a>
        ,{" "}
        <a
          href="https://hkust.edu.hk/"
          target="_blank"
          rel="noreferrer"
        >
          Hong Kong University of Science and Technology
        </a>
        . My research interests span{" "}
        <b>
          Computer Vision, Computer Graphics, and Machine Learning.
        </b>{" "}
        I was very fortunate to be advised by Prof.{" "}
        <a href="https://hongbofu.people.ust.hk/" target="_blank" rel="noreferrer">Hongbo Fu</a>
        {" "}and Prof.{" "}
        <a href="https://anyirao.com/" target="_blank" rel="noreferrer">Anyi Rao</a>.
        I received my B.E. degree in{" "}
        <b>Artificial Intelligence</b> from Beijing
        Normal University, where I worked on 3D reconstruction under the
        supervision of Prof.{" "}
        <a href="https://shishenghuang.github.io/index/" target="_blank" rel="noreferrer">Shi-Sheng Huang</a>.
      </p>
      <p>
        I am currently interning with the{" "}
        <b>Vision Foundation Model team at NIO</b>,
        where I focus on World Models and multimodal large language models
        (MLLMs), working closely with Dr. Sheng Yang.
      </p>

      <p>My current work focuses on:</p>

      <ul>
        <li>
          World models
        </li>
        <li>
          Multimodal large language models (MLLMs)
        </li>
        <li>
          3D generation and reconstruction
        </li>
        <li>
          Visual reasoning across vision, graphics, and ML
        </li>
      </ul>

      <blockquote>
        <p>
          "Building controllable visual worlds for reconstruction,
          simulation, and generation."
        </p>
        <footer>Li-Heng Chen</footer>
      </blockquote>
    </div>
  );
}
