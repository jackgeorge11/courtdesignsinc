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
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" sizes="16x16 32x32 64x64" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="196x196"
          href="/favicon-192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="160x160"
          href="/favicon-160.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="/favicon-64.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16.png"
        />
        <link rel="apple-touch-icon" href="/favicon-57.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon-114.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon-72.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon-144.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon-60.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon-120.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon-76.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon-152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="/favicon-144.png"></meta>
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
            <h3>Courtney Delancey</h3>
            <h2 className="black thin">
              Stylist, Merchandising, Interior Design
            </h2>
            <br />
            {/* <Link
              to="/portfolio"
              className={page === "portfolio" ? "is--active" : ""}
            >
              Portfolio
            </Link> */}
            <Link to="/" className={page === "home" ? "is--active" : ""}>
              Home
            </Link>
            <Link to="/contact" className={page === "info" ? "is--active" : ""}>
              Contact
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
