import React from "react";
import { publications } from "./publications";
import ProjectCard from "./ProjectCards";

export default function Projects() {
  return (
    <section className="inner-page">
      <h1>Publications</h1>
      <div className="papers">
        {publications.map(paper => <ProjectCard key={paper.title} paper={paper} showAuthors />)}
      </div>
    </section>
  );
}
