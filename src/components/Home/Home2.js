import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/liheng-profile.png";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              RESEARCH <span className="purple"> SNAPSHOT </span>
            </h1>
            <p className="home-about-body">
              I am a first-year MPhil student at the{" "}
              <b className="purple">
                Academy of Interdisciplinary Studies, HKUST
              </b>
              . My research interests span{" "}
              <b className="purple">
                Computer Vision, Computer Graphics, and Machine Learning
              </b>
              .
              <br />
              <br />
              I received my B.E. degree in{" "}
              <b className="purple">Artificial Intelligence</b> from Beijing
              Normal University, where I worked on 3D reconstruction with Prof.
              Shi-Sheng Huang.
              <br />
              <br />
              I am currently an intern at{" "}
              <b className="purple">Meituan (Beijing)</b>, working on world
              models for autonomous driving data synthesis and simulation.
              <br />
              <br />
              Previously at <b className="purple">VAST (Beijing)</b>, I worked
              on 3D generation and reconstruction with Dr. Zi-Xin Zou and Dr.
              Yan-Pei Cao.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img
              src={myImg}
              className="img-fluid about-profile-image"
              alt="Li-Heng Chen"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
