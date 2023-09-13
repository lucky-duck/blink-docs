import React from "react";
import styles from "./styles.module.css";
import FullRightArrowIcon from "../../Svg/FullRightArrowIcon";

type Props = {
  title: string;
  description?: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
};

export default function Bookmark({ title, description, Icon, link }: Props) {
  return (
    <a className={styles.featureWrapper} href={link}>
      <div className={styles.featureInnerWrapper}>
        {Icon && (
          <div className={styles.iconWrapper}>
            <Icon className={styles.iconStyle} />
          </div>
        )}
        <h3 className={styles.titleStyle}>{title}</h3>
        {description && <p className={styles.descriptionStyle}>{description}</p>}
      </div>
      <div className={styles.button}>
        <span>Learn more</span>
        <FullRightArrowIcon />
      </div>
    </a>
  );
}
