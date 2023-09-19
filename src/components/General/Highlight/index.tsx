import React from "react";

type Props = {
  type?: "tip" | "warning" | "info" | "caution";
  children: React.ReactNode;
};

export default function Highlight({ children, type }: Props) {
  return (
    <div
      style={{
        ...highlightStyle,
        backgroundColor: !type || type === "tip" ? blue.backgroundColor : red.backgroundColor,
      }}
      className="highlight"
    >
      {children}
    </div>
  );
}

const highlightStyle = {
  padding: "1.2rem 1.5rem",
  borderRadius: "0.5rem",
  fontSize: "1.1rem",
  margin: "2rem 0",
};

const blue = {
  backgroundColor: "#eff3fb",
};

const red = {
  backgroundColor: "#fde8e8",
};
