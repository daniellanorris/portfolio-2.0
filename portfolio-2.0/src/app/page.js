import styles from "./page.module.css";
import React from "react";

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <main className={styles.main}></main>
        <h1> Home </h1>
      </div>
    </>
  );
}
