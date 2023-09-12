import React from "react";
import styles from "./styles.module.css";

type Props = {
  title: string;
  description: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
};

export default function ProductFeature({ title, description, Icon, link }: Props) {
  return (
    <a className={styles.featureWrapper} href={link}>
      <div className={styles.iconWrapper}>{Icon && <Icon className={styles.iconStyle} />}</div>
      <div className={styles.featureInnerWrapper}>
        <h3 className={styles.titleStyle}>{title}</h3>
        <p className={styles.descriptionStyle}>{description}</p>
      </div>
    </a>
  );
}
