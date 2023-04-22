import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@root/styles/Home.module.css";
import Link from "next/link";
import { Typography } from "@mui/material";

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
          <Typography color="#fff" fontWeight={400}>
            DevOps Notes
          </Typography>
          <Typography color="#fff" fontWeight={400}>
            Howey Design
          </Typography>
        </div>

        <div className={styles.center}>
          <Typography variant="h3" color="#333">
            DevOps Notes App
          </Typography>
        </div>

        <div className={styles.grid}>
          <Link href="about" className={styles.card}>
            <Typography variant="h3" className={inter.className}>
              About <span>-&gt;</span>
            </Typography>
          </Link>
          <Link
            href="https://www.howeydesign.com"
            target="_blank"
            className={styles.card}
          >
            <Typography variant="h3" className={inter.className}>
              HoweyDesign<span>-&gt;</span>
            </Typography>
          </Link>
          <Link href="#" className={styles.card}>
            <Typography variant="h3" className={inter.className}>
              TODO <span>-&gt;</span>
            </Typography>
          </Link>
        </div>
      </main>
    </>
  );
}
