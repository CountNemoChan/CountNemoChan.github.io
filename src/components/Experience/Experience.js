import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import gangwudianliLogo from "../../Assets/Experience/gangwudianli.png";
import abbLogo from "../../Assets/Experience/abb.png";
import vastLogo from "../../Assets/Experience/vast_1.png";
import meituanLogo from "../../Assets/Experience/meituan_logo.png";

const professionalExperience = [
  { name: "IPC", logo: gangwudianliLogo },
  { name: "ABB", logo: abbLogo },
  { name: "VAST", logo: vastLogo },
  { name: "Meituan", logo: meituanLogo },
];

function Experience() {
  return (
    <Container fluid className="professional-experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading professional-experience-heading">
          Professional <strong className="purple">Experience</strong>
        </h1>
        <Row className="professional-experience-row">
          {professionalExperience.map((experience) => (
            <Col
              key={experience.name}
              xs={6}
              md={3}
              className="professional-experience-col"
            >
              <div className="professional-experience-logo-card">
                <img
                  src={experience.logo}
                  alt={`${experience.name} logo`}
                  className="professional-experience-logo"
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
