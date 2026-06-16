import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I am <span className="purple">Li-Heng Chen</span>,
            based in <span className="purple">Hong Kong</span>.
            <br />
            I am an MPhil student at{" "}
            <span className="purple">HKUST</span> and an algorithm research
            intern at <span className="purple">Meituan</span>.
            <br />
            I was fortunate to be advised by Prof. Hongbo Fu, Prof. Anyi Rao,
            and Prof. Shi-Sheng Huang.
            <br />
            <br />
            My current work focuses on:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> World models for autonomous driving data
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
