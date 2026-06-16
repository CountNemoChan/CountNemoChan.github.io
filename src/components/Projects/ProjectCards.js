import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {props.primaryLink && (
          <Button variant="primary" href={props.primaryLink} target="_blank">
            <CgWebsite /> &nbsp;
            {props.primaryLabel || "Link"}
          </Button>
        )}
        {props.secondaryLinks?.map((link) => (
          <Button
            key={link.label}
            variant="primary"
            href={link.url}
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: "10px", marginTop: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {link.label}
          </Button>
        ))}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
