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
              I’m a first-year MPhil. at{" "}
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
              </b>
              {" "}
              I was very fortunate to be advised by Prof. Hongbo Fu and Prof.
              Anyi Rao. I received my B.E. degree in{" "}
              <b className="purple">Artificial Intelligence</b> from Beijing
              Normal University, where I worked on 3D reconstruction under the
              supervision of Prof. Shi-Sheng Huang.
              <br />
              <br />
              I am currently conducting an internship at{" "}
              <b className="purple">Meituan (Beijing)</b>, where my work is
              centered on World Models, specifically in the domain of Synthesis
              and Simulation for Autonomous Driving Data. Prior to this, I
              gained valuable experience at{" "}
              <b className="purple">VAST (Beijing)</b>, concentrating on 3D
              Generation and Reconstruction under the guidance of Dr. Zi-Xin Zou
              and Dr. Yan-Pei Cao.
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
