import { Link } from "gatsby";
import React from "react";
import "../styles/index.scss";

export default function Layout({ children, page, text }) {
  return (
    <div className="layout">
      <main className={`left ${page && page}`}>{children}</main>
      <div className="right bg-cream">
        <nav>
          <Link to="/interior-design">Interior Design</Link>
          <Link to="/styling-and-merchandising">Styling & Merchandising</Link>
          <br />
          <Link to="/press">Press</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        {text && <article>{text}</article>}
        <div className="copyright">
          <p>© Courtney Delancey, 2022</p>
        </div>
      </div>
    </div>
  );
}
