import React, { useEffect, useRef, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import { FiDownload } from "react-icons/fi";
import pdf from "../../Assets/CHEN_Liheng_CV_20261104.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

export default function Resume() {
  const viewer = useRef(null);
  const [width, setWidth] = useState(0);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setWidth(Math.floor(entry.contentRect.width));
    });
    observer.observe(viewer.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="inner-page">
      <div className="section-heading cv-heading">
        <h1>Curriculum vitae</h1>
        <a className="action" href={pdf} download><FiDownload aria-hidden="true" /> Download PDF</a>
      </div>
      <div ref={viewer} className="cv-viewer">
        <Document file={pdf} onLoadSuccess={document => setPages(document.numPages)}
          error={<a href={pdf}>Open CV as a PDF</a>}>
          {width > 0 && Array.from({ length: pages }, (_, i) => (
            <Page key={i} pageNumber={i + 1} width={width} />
          ))}
        </Document>
      </div>
    </section>
  );
}
