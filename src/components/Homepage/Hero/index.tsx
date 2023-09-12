import React from "react";
import styles from "./styles.module.css";

type Props = {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  cta2Text?: string;
  cta2Link?: string;
};

export default function Hero({ title, subtitle, ctaText, ctaLink, cta2Text, cta2Link }: Props) {
  return (
    <header className={styles.heroWrapper}>
      <h1 className={styles.titleStyle}>{title}</h1>
      <p className={styles.subtitleStyle}>{subtitle}</p>
      <div className={styles.buttonWrapper}>
        {ctaText && ctaLink && (
          <a className={styles.button} href={ctaLink}>
            {ctaText}
          </a>
        )}
        {cta2Text && cta2Link && (
          <a className={styles.buttonOutline} href={cta2Link}>
            {cta2Text}
          </a>
        )}
      </div>
    </header>
  );
}
