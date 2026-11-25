import React, { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import "./style.css";

const Resume = lazy(() => import("./components/Resume/ResumeNew"));

export default function App() {
  return (
    <BrowserRouter>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <ScrollToTop />
      <main id="main" className="shell" tabIndex="-1">
        <Suspense fallback={<p role="status">Loading CV…</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
