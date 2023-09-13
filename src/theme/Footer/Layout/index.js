import React from "react";
import clsx from "clsx";
export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx("footer", {
        "footer--dark": style === "dark",
      })}
    >
      <div className="footer-container container-fluid">
        <div style={footerInnerWrapper}>
          {logo && <div className="margin-bottom--sm">{logo}</div>}
          {links}
        </div>
        <div style={divider}></div>
        {(logo || copyright) && <div className="footer__bottom">{copyright}</div>}
      </div>
    </footer>
  );
}

const footerInnerWrapper = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
  flexWrap: "wrap",
  marginBottom: "1rem",
  gap: "2rem",
};

const divider = {
  height: "1px",
  width: "100%",
  backgroundColor: "rgba(221, 250, 255, 0.15)",
  marginBottom: "2rem",
};
