import React from "react";
import styles from "./styles.module.css";
import FullRightArrowIcon from "../../Svg/FullRightArrowIcon";

type Props = {
  title: string;
  description: string;
  link: string;
  linkText: string;
  color: "gradientWinter" | "galaxyDark";
};

export default function Card({ title, description, link, color, linkText }: Props) {
  return (
    <a
      className={`
      ${styles.cardStyle}
      ${styles[color]}
      `}
      href={link}
    >
      <div className={styles.cardInnerWrapper}>
        <h3 className={styles.titleStyle}>{title}</h3>
        <p className={styles.descriptionStyle}>{description}</p>
      </div>
      <div className={styles.linkWrapper}>
        <span
          className={`
          ${styles.linkStyle} ${color === "gradientWinter" ? styles.linkStyleWinter : ""}
        `}
        >
          {linkText}
        </span>
        <FullRightArrowIcon color={color === "gradientWinter" ? "#4467FB" : "#FFFFFF"} />
      </div>
    </a>
  );
}
