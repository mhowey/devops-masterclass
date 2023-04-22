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
        <title>Devops Notes App</title>
        <meta name="description" content="Notes for the Devops Masterclass" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <Typography>DevOps Notes</Typography>
          <Typography>Howey Design</Typography>
        </div>

        <div className={styles.center}>DevOps Notes App</div>

        <div className={styles.grid}>
          <Link href="about" className={styles.card}>
            <Typography variant="h3" className={inter.className}>
              about <span>-&gt;</span>
            </Typography>
          </Link>
          <Link href="https://www.howeydesign.com" className={styles.card}>
            <Typography variant="h3" className={inter.className}>
              HoweyDesign<span>-&gt;</span>
            </Typography>
          </Link>
        </div>
      </main>
    </>
  );
}
