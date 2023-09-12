import React from "react";

type Props = {
  color?: string;
};

export default function FullRightArrowIcon({ color }: Props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.6479 6L18.625 12M18.625 12L12.6479 18M18.625 12H6"
        stroke={color ? color : "#4467FB"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
