import React from "react";
import Card from "../Card";

type Props = {
  cards: {
    title: string;
    description: string;
    link: string;
    linkText: string;
    color: "gradientWinter" | "galaxyDark";
  }[];
};

export default function CardWrapper({ cards }: Props) {
  return (
    <div style={cardWrapper}>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}

const cardWrapper: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "2rem",
  padding: "0rem 0 8rem 0",
};
