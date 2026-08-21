import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I’m a second-year PhD candidate at{" "}
            <a
              href="https://ais.hkust.edu.hk/"
              target="_blank"
              rel="noreferrer"
              className="purple"
            >
              Academy of Interdisciplinary Studies
            </a>
            ,{" "}
            <a
              href="https://hkust.edu.hk/"
              target="_blank"
              rel="noreferrer"
              className="purple"
            >
              Hong Kong University of Science and Technology
            </a>
            . My research interests span{" "}
            <b className="purple">
              Computer Vision, Computer Graphics, and Machine Learning.
            </b>{" "}
            I was very fortunate to be advised by Prof. Hongbo Fu and Prof.
            Anyi Rao. I received my B.E. degree in{" "}
            <b className="purple">Artificial Intelligence</b> from Beijing
            Normal University, where I worked on 3D reconstruction under the
            supervision of Prof. Shi-Sheng Huang.
            <br />
            <br />
            I am currently interning with the{" "}
            <b className="purple">Vision Foundation Model team at NIO</b>,
            where I focus on World Models and multimodal large language models
            (MLLMs), working closely with Dr. Sheng Yang. 
          </p>

          <p style={{ textAlign: "justify" }}>My current work focuses on:</p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> World models
            </li>
            <li className="about-activity">
              <ImPointRight /> Multimodal large language models (MLLMs)
            </li>
            <li className="about-activity">
              <ImPointRight /> 3D generation and reconstruction
            </li>
            <li className="about-activity">
              <ImPointRight /> Visual reasoning across vision, graphics, and ML
            </li>
          </ul>

          <p style={{ color: "#8bc8ff" }}>
            "Building controllable visual worlds for reconstruction,
            simulation, and generation."{" "}
          </p>
          <footer className="blockquote-footer">Li-Heng Chen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
