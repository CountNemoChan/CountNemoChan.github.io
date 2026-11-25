import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";

export default function About() {
  const [showActivity, setShowActivity] = useState(false);
  return (
    <section className="inner-page">
      <h1>About</h1>
      <div className="about-layout">
        <div className="bio">
          <p>I’m a second-year PhD candidate at the <a href="https://ais.hkust.edu.hk/">Academy of Interdisciplinary Studies</a> at <a href="https://hkust.edu.hk/">HKUST</a>, advised by Prof. Hongbo Fu and Prof. Anyi Rao.</p>
          <p>At NIO, I work with Dr. Sheng Yang on world models and multimodal large language models for autonomous driving. I’m interested in how these models reason about visual scenes and how we can use them to generate and reconstruct 3D worlds.</p>
          <p>I received my B.E. in Artificial Intelligence from Beijing Normal University, where I studied 3D reconstruction with Prof. Shi-Sheng Huang.</p>
        </div>
        <aside className="toolkit">
          <h2>Research skills</h2>
          <p>C++, Python, data analysis, Git, Docker</p>
          <h2>Tools</h2>
          <p>macOS, Google Chrome, VS Code</p>
        </aside>
      </div>
      <details className="activity" onToggle={event => setShowActivity(event.currentTarget.open)}>
        <summary>GitHub activity</summary>
        {showActivity && <div className="calendar"><GitHubCalendar username="CountNemoChan" color="#426655" /></div>}
        <a className="text-link" href="https://github.com/CountNemoChan">View GitHub profile</a>
      </details>
    </section>
  );
}
