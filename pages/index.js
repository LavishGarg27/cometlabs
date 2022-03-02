import Head from "next/head";
import styles from "../styles/Home.module.css";
import TuringTest from "./TuringTest";
import React from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cometlabs Assignment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TuringTest />
    </div>
  );
}
