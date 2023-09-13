import React, { useState } from "react";
import styles from "./styles.module.css";

type Props = {
  question: string;
  answer: string;
};

export default function Accordion({ question, answer }: Props) {
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
      {isOpen && <div className={styles.answer}>{answer}</div>}
    </div>
  );
}
