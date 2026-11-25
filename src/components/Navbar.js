import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="masthead">
      <div className="shell header-inner">
        <NavLink to="/" end className="wordmark" aria-label="Li-Heng Chen, home">
          <span className="monogram" aria-hidden="true">lc.</span>
          <span>Li-Heng Chen</span>
        </NavLink>
        <nav aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/project">Publications</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/resume">CV</NavLink>
        </nav>
      </div>
    </header>
  );
}
