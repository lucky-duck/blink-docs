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
  padding: "1.5rem",
  borderRadius: "1rem",
  fontSize: "1.2rem",
  margin: "2rem 0",
};

const blue = {
  backgroundColor: "#eff3fb",
};

const red = {
  backgroundColor: "#fde8e8",
};
