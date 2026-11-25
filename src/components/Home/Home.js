import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowUpRight, FiMail } from "react-icons/fi";
import portrait from "../../Assets/profile_photo.jpeg";
import { publications } from "../Projects/publications";
import ProjectCard from "../Projects/ProjectCards";

export default function Home() {
  const [showActivity, setShowActivity] = useState(false);
  return (
    <>
      <section className="intro" aria-labelledby="profile-name">
        <div className="intro-copy">
          <p className="eyebrow"><span className="accent-line" /> PhD candidate · HKUST</p>
          <h1 id="profile-name">Li-Heng Chen</h1>
          <div className="bio intro-text">
            <p>I’m a second-year PhD candidate at the <a href="https://ais.hkust.edu.hk/">Academy of Interdisciplinary Studies</a> at <a href="https://hkust.edu.hk/">HKUST</a>, advised by Prof. Hongbo Fu and Prof. Anyi Rao.</p>
            <p>At NIO, I work with Dr. Sheng Yang on world models and multimodal large language models for autonomous driving. I’m interested in how these models reason about visual scenes and how we can use them to generate and reconstruct 3D worlds.</p>
            <p>I received my B.E. in Artificial Intelligence from Beijing Normal University, where I studied 3D reconstruction with Prof. Shi-Sheng Huang.</p>
          </div>
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
      <div className="profile-details">
        <div className="toolkit">
          <section>
            <h2>Research skills</h2>
            <p>C++, Python, data analysis, Git, Docker</p>
          </section>
          <section>
            <h2>Tools</h2>
            <p>macOS, Google Chrome, VS Code</p>
          </section>
        </div>
        <details className="activity" onToggle={event => setShowActivity(event.currentTarget.open)}>
          <summary>GitHub activity</summary>
          {showActivity && <div className="calendar"><GitHubCalendar username="CountNemoChan" color="#426655" /></div>}
          <a className="text-link" href="https://github.com/CountNemoChan">View GitHub profile</a>
        </details>
      </div>
    </>
  );
}
