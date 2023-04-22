import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@root/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Devops Masterclass</title>
        <meta name="description" content="Notes for the Devops Masterclass" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Devops Masterclass Notes</p>
          <p>by Matt Howey Design</p>
        </div>

        <div className={styles.center}>Devops Master Class Notes</div>

        <div className={styles.grid}>
          <Link href="devops-docker" className={styles.card}>
            <h2 className={inter.className}>
              DevOps Docker <span>-&gt;</span>
            </h2>
          </Link>
          <Link href="#" className={styles.card}>
            <h2 className={inter.className}>
              nothing yet <span>-&gt;</span>
            </h2>
          </Link>
          <Link href="#" className={styles.card}>
            <h2 className={inter.className}>
              nothing yet <span>-&gt;</span>
            </h2>
          </Link>
        </div>
      </main>
    </>
  );
}
