import React from "react";

export default function Footer() {
  return (
    <footer className="shell site-footer">
      <span>© {new Date().getFullYear()} Li-Heng Chen</span>
      <div>
        <a href="mailto:liheng.chen0308@gmail.com">Email</a>
        <a href="https://github.com/CountNemoChan">GitHub</a>
        <a href="https://www.instagram.com/countnemochan">Instagram</a>
      </div>
    </footer>
  );
}
