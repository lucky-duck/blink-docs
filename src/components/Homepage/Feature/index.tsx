import React from "react";
import FullRightArrowIcon from "../../Svg/FullRightArrowIcon";

type Props = {
  title: string;
  description: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
};

export default function Feature({ title, description, Icon, link }: Props) {
  return (
    <div style={featureWrapper}>
      <div style={featureInnerWrapper}>
        <div style={iconWrapper}>{Icon && <Icon style={iconStyle} />}</div>
        <h3 style={titleStyle}>{title}</h3>
        <p style={descriptionStyle}>{description}</p>
      </div>
      <a style={button} href={link}>
        <span>Learn more</span>
        <FullRightArrowIcon />
      </a>
    </div>
  );
}

const featureWrapper: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "0.5rem",
  padding: "2.5rem 2.5rem",
  width: "calc((100% - 4rem) / 3)",
  border: "1px solid #D9DBE6",
  height: "21rem",
  borderRadius: "0.5rem",
};

const featureInnerWrapper: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "1.2rem",
};

const iconWrapper: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F9FAFB",
  padding: "1.2rem",
  borderRadius: "0.5rem",
};

const iconStyle: React.CSSProperties = {
  width: "1.3rem",
  height: "1.3rem",
};

const titleStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 600,
  margin: 0,
};

const descriptionStyle: React.CSSProperties = {
  fontSize: "1rem",
  maxWidth: "20rem",
  fontWeight: 400,
};

const button: React.CSSProperties = {
  color: "#4467FB",
  borderRadius: "0.5rem",
  fontSize: "1rem",
  fontWeight: 600,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  transition: "all 0.2s ease-in-out",
};
