import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowUpRight, FiMail } from "react-icons/fi";
import portrait from "../../Assets/profile_photo.jpeg";
import { publications } from "../Projects/publications";
import ProjectCard from "../Projects/ProjectCards";

export default function Home() {
  return (
    <>
      <section className="intro" aria-labelledby="profile-name">
        <div className="intro-copy">
          <p className="eyebrow"><span className="accent-line" /> PhD candidate · HKUST</p>
          <h1 id="profile-name">Li-Heng Chen</h1>
          <p className="intro-text">
            I study how machines reconstruct and generate 3D worlds.
            My work at HKUST and NIO spans computer vision, graphics,
            and autonomous driving.
          </p>
          <div className="contact-links">
            <a className="action" href="mailto:liheng.chen0308@gmail.com"><FiMail aria-hidden="true" /> Email me</a>
            <a href="https://github.com/CountNemoChan">GitHub <FiArrowUpRight aria-hidden="true" /></a>
            <Link to="/resume">CV <FiArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
        <div className="portrait-frame"><img src={portrait} alt="Li-Heng Chen" width="886" height="886" /></div>
      </section>
      <section className="selected" aria-labelledby="selected-title">
        <div className="section-heading">
          <h2 id="selected-title">Selected research</h2>
          <Link className="text-link" to="/project">All publications <FiArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="papers">
          {publications.slice(0, 3).map(paper => <ProjectCard key={paper.title} paper={paper} />)}
        </div>
      </section>
    </>
  );
}
