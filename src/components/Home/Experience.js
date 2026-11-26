import React from "react";
import ipc from "../../Assets/Experience/gangwudianli.png";
import abb from "../../Assets/Experience/abb.png";
import vast from "../../Assets/Experience/vast_1.png";
import meituan from "../../Assets/Experience/meituan_logo.png";
import nio from "../../Assets/Experience/nio.png";

const positions = [
  { company: "NIO", role: "Algorithm Researcher Intern, Foundation Model Research Team", dates: "Mar 2026 – Present", logo: nio },
  { company: "Meituan", role: "Algorithm Researcher Intern, Department of Unmanned Vehicle", dates: "Dec 2025 – Mar 2026", logo: meituan },
  { company: "VAST", role: "Algorithm Researcher Intern, Technology and Engineering", dates: "Aug 2024 – Jun 2025", logo: vast },
  { company: "ABB (China)", role: "Algorithm Engineer Intern, Digital Systems", dates: "Jul 2024", logo: abb },
  { company: "IPC", role: "System Engineering Intern, Communications", dates: "Jan – Feb 2024", logo: ipc },
];

export default function Experience() {
  return (
    <section id="experience" className="home-section" aria-labelledby="experience-title">
      <div className="section-heading">
        <h2 id="experience-title">Experience</h2>
      </div>
      <ol className="positions">
        {positions.map(({ company, role, dates, logo }) => (
          <li key={company}>
            <div className="employer-logo"><img src={logo} alt="" /></div>
            <div className="position"><h3>{company}</h3><p>{role}</p></div>
            <span className="metadata">{dates}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
