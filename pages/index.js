import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Drip-Drop</h1>
        <p style={{ fontSize: "1.25rem" }}>
          A place to see all air-drops you have not claimed.
        </p>

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        {/* <div className={styles.grid}>
          <Link href="/oracles/jan-2021-senate">
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>January 5th, 2021 Senate Runoff &rarr;</h3>
              <p>
                Associated Press and Everipedia partner again to bring the
                Georgia senate runoff on-chain!
              </p>
            </a>
          </Link>
        </div> */}
      </main>

      {/* <footer className={styles.footer}>
        <a href="https://earnifi.">Powered by Earnifi</a>
      </footer> */}
    </div>
  );
}
