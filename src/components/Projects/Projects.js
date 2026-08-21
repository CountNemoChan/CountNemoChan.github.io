import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import usrDrive from "../../Assets/Projects/usr_drive_teaser.png";
import vistagen from "../../Assets/Projects/vistagen_teaser.png";
import gcraydiffusion from "../../Assets/Projects/gcraydiffusion_teaser.png";
import mcm from "../../Assets/Projects/mcm2024_2.png";
import neuralIndicator from "../../Assets/Projects/icml2024.png";
import paddyField from "../../Assets/Projects/paddy_field.png";
import mcmPaper from "../../Assets/Publications/mcm2024.pdf";
import mcmCertificate from "../../Assets/Publications/mcm-certificate.pdf";
import neuralIndicatorPaper from "../../Assets/Publications/huang24b.pdf";
import paddyFieldPaper from "../../Assets/Publications/paddy-field.pdf";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Selected <strong className="purple">Academic Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Research projects and publications from my academic homepage.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={usrDrive}
              isBlog={false}
              title="USR-Drive"
              description={
                <>
                  Unified driving scene representation via joint denoising of
                  3D Gaussians and boxes.
                  <br />
                  <br />
                  <b>Authors:</b> Li-Heng Chen, Haokai Pang, Chengye Su, Jiarun
                  Liu, Qifeng Chen, Ziqian Ni, Jianxin Huang, Shi-Sheng Huang,
                  Hongbo Fu, Sheng Yang.
                  <br />
                  <b>Status:</b> arXiv preprint, 2026.
                </>
              }
              primaryLink="https://arxiv.org/abs/2608.19036"
              primaryLabel="arXiv"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vistagen}
              isBlog={false}
              title="VistaGEN"
              description={
                <>
                  Consistent driving video generation with fine-grained control
                  using multiview visual-language reasoning.
                  <br />
                  <br />
                  <b>Authors:</b> Li-Heng Chen*, Ke Cheng*, Yahui Liu, Lei Shi,
                  Shi-Sheng Huang, Hongbo Fu.
                  <br />
                  <b>Status:</b> Under review.
                </>
              }
              primaryLink="https://arxiv.org/abs/2603.28353"
              primaryLabel="arXiv"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gcraydiffusion}
              isBlog={false}
              title="GCRayDiffusion"
              description={
                <>
                  Pose-free surface reconstruction via geometric consistent ray
                  diffusion.
                  <br />
                  <br />
                  <b>Authors:</b> Li-Heng Chen, Zi-Xin Zou, Chang Liu, Tianjiao
                  Jing, Yan-Pei Cao, Shi-Sheng Huang, Hongbo Fu, Hua Huang.
                  <br />
                  <b>Venue:</b> International Conference on Computer Vision
                  (ICCV), 2025.
                </>
              }
              primaryLink="https://arxiv.org/abs/2503.22349"
              primaryLabel="arXiv"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mcm}
              isBlog={false}
              title="The Power of Momentum"
              description={
                <>
                  How to win the match with data.
                  <br />
                  <br />
                  <b>Authors:</b> Li-Heng Chen, Rui Chen, Yujia Liu.
                  <br />
                  <b>Award:</b> Mathematical Contest in Modeling 2024, F Prize.
                </>
              }
              secondaryLinks={[
                { label: "Paper", url: mcmPaper },
                { label: "Certificate", url: mcmCertificate },
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neuralIndicator}
              isBlog={false}
              title="NeuralIndicator"
              description={
                <>
                  Implicit surface reconstruction from neural indicator priors.
                  <br />
                  <br />
                  <b>Authors:</b> Shi-Sheng Huang, Guo Chen, Li-Heng Chen, Hua
                  Huang.
                  <br />
                  <b>Venue:</b> International Conference on Machine Learning
                  (ICML), 2024.
                </>
              }
              secondaryLinks={[{ label: "Paper", url: neuralIndicatorPaper }]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paddyField}
              isBlog={false}
              title="Paddy Field Speckle Model"
              description={
                <>
                  Construction of a speckle pattern model with paddy field
                  characteristics.
                  <br />
                  <br />
                  <b>Authors:</b> Rui Chen, Li-Heng Chen, Wentao Qing.
                  <br />
                  <b>Project:</b> Beijing Undergraduate Research and Innovation
                  Project.
                </>
              }
              secondaryLinks={[{ label: "Paper", url: paddyFieldPaper }]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
