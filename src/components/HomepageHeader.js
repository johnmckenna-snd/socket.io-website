import React from "react";
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import styles from "./HomepageHeader.module.css";

export default function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <ThemedImage
            className={styles.logo}
            alt="Socket.IO logo"
            sources={{
              light: useBaseUrl("images/logo.svg"),
              dark: useBaseUrl("images/logo-dark.svg"),
            }}
          />
        </div>
        <div className={styles.right}>
          <h1 className="title">Socket.IO</h1>
          <p >Bidirectional and low-latency communication for every platform</p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/get-started/chat">
              Get started
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/v4/">
              Documentation
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
