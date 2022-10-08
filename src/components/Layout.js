import { Link } from "gatsby";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/index.scss";

export default function Layout({
  children,
  page,
  text,
  title,
  description,
  noindex,
}) {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Helmet>
        <title>
          {title ? `${title} | Court Designs Inc.` : "Court Designs Inc."}
        </title>
        <meta
          name="description"
          content={
            description
              ? description + ` `
              : "" +
                "Courtney Delancey is a visual merchandiser, stylist and interior designer based in Los Angeles."
          }
        />
        {noindex ? <meta name="robots" content="noindex" /> : null}
      </Helmet>
      <div className="header-nav">
        <Link to="/" className={page === "home" ? "is--active" : ""}>
          Courtney Delancey
        </Link>
        <button
          class={
            menu
              ? "hamburger hamburger--arrow is-active"
              : "hamburger hamburger--arrow"
          }
          type="button"
          onClick={() => setMenu((prev) => !prev)}
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <div className="layout">
        <main className={`left ${page}`}>{children}</main>
        <div className={menu ? "right is-active" : "right"}>
          <nav>
            <Link to="/" className={page === "home" ? "is--active" : ""}>
              Courtney Delancey
            </Link>
            <h2 className="black thin">
              Stylist, Merchandising, Interior Design
            </h2>
            <br />
            <Link
              to="/portfolio"
              className={page === "portfolio" ? "is--active" : ""}
            >
              Portfolio
            </Link>
            <Link to="/info" className={page === "info" ? "is--active" : ""}>
              Info
            </Link>
            <br />
            <p className="muted">© Courtney Delancey, 2022</p>
          </nav>
          {text && <article>{text}</article>}
        </div>
      </div>
    </>
  );
}
