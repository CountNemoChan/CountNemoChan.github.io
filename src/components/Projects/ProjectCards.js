import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard({ paper, showAuthors = false }) {
  const Heading = showAuthors ? "h2" : "h3";
  return (
    <article className="paper">
      <div className="paper-figure">
        <img src={paper.image} alt="" loading="lazy" />
      </div>
      <div className="paper-copy">
        <span className="metadata">{paper.venue}</span>
        <Heading className="paper-title"><a href={paper.links[0].url}>{paper.title}</a></Heading>
        <p>{paper.description}</p>
        {showAuthors && <p className="authors">{paper.authors}</p>}
        <div className="paper-links">
          {paper.links.map(({ label, url }) => (
            <a key={url} href={url} target="_blank" rel="noreferrer" aria-label={paper.title + " " + label}>
              {label} <FiArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
