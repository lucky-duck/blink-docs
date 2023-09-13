import React, { useState } from "react";
import styles from "./styles.module.css";

type Props = {
  question: string;
  children: React.ReactNode;
};

export default function Accordion({ question, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <div
        className={`${styles.question} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className={styles.icon}>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className={styles.answer}>{children}</div>}
    </div>
  );
}
