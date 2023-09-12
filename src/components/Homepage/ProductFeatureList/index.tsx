import React from "react";
import ProductFeature from "../ProductFeature";

type Props = {
  title: string;
  features: {
    title: string;
    description: string;
    Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    link: string;
  }[];
};

export default function ProductFeatureList({ title, features }: Props) {
  return (
    <div style={productFeatureListSection}>
      <h2 style={titleStyle}>{title}</h2>
      <div style={productFeatureListWrapper}>
        {features.map((feature, index) => (
          <ProductFeature
            key={index}
            title={feature.title}
            description={feature.description}
            Icon={feature.Icon}
            link={feature.link}
          />
        ))}
      </div>
    </div>
  );
}

const productFeatureListWrapper: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "2rem",
  padding: "2rem 0",
  width: "100%",
  overflow: "hidden",
};

const productFeatureListSection: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "6rem 0",
};

const titleStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 600,
  margin: 0,
  paddingBottom: "2rem",
};
