import { Link } from "gatsby";
import React from "react";
import "../styles/index.scss";

export default function Layout({ children, page }) {
  return (
    <div className="layout">
      <main className={`left ${page && page}`}>{children}</main>
      <div className="right bg-cream">
        <nav>
          <Link to="/design">Design</Link>
          <Link to="/merchandising">Merchandising</Link>
          <Link to="/representation">Sales Repping</Link>
          <Link to="/press">Press</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="copyright">
          <p>© Courtney Delancey, 2022</p>
        </div>
      </div>
    </div>
  );
}
