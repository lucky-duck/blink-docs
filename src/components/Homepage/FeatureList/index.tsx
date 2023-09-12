import React from "react";
import Feature from "../Feature";

type Props = {
  features: {
    title: string;
    description: string;
    Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    link: string;
  }[];
};

export default function FeatureList({ features }: Props) {
  return (
    <div style={featureListWrapper}>
      {features.map((feature, index) => (
        <Feature
          key={index}
          title={feature.title}
          description={feature.description}
          Icon={feature.Icon}
          link={feature.link}
        />
      ))}
    </div>
  );
}

const featureListWrapper: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "2rem",
  padding: "2rem 0",
  maxWidth: "100%",
  overflow: "hidden",
  margin: "0 auto",
};
