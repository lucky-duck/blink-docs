import React from "react";

type Props = {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  cta2Text?: string;
  cta2Link?: string;
};

export default function Hero({ title, subtitle, ctaText, ctaLink, cta2Text, cta2Link }: Props) {
  return (
    <header style={heroWrapper}>
      <h1 style={titleStyle}>{title}</h1>
      <p style={subtitleStyle}>{subtitle}</p>
      <div style={buttonWrapper}>
        {ctaText && ctaLink && (
          <a style={button} href={ctaLink}>
            {ctaText}
          </a>
        )}
        {cta2Text && cta2Link && (
          <a style={buttonOutline} href={cta2Link}>
            {cta2Text}
          </a>
        )}
      </div>
    </header>
  );
}

const heroWrapper: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  padding: "6rem 0",
};

const titleStyle: React.CSSProperties = {
  fontSize: "3rem",
  fontWeight: 600,
  textAlign: "center",
};

const subtitleStyle: React.CSSProperties = {
  fontSize: "1.375rem",
  textAlign: "center",
  maxWidth: "40rem",
  fontWeight: 400,
  paddingBottom: "2rem",
};

const buttonWrapper: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
};

const button: React.CSSProperties = {
  backgroundColor: "#4467FB",
  color: "white",
  borderRadius: "2.5rem",
  padding: "1rem 2rem",
  fontSize: "1rem",
  fontWeight: 600,
};

const buttonOutline = {
  backgroundColor: "transparent",
  color: "#202234",
  borderRadius: "0.5rem",
  padding: "1rem 2rem",
  fontSize: "1rem",
  fontWeight: 600,
};
