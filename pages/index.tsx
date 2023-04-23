import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@root/styles/Home.module.css";
import Link from "next/link";
import { Typography } from "@mui/material";
import { MdOutlineOpenInNew } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

import ContentWrapper from "../components/ContentWrapper";

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
      <ContentWrapper>
        <main className={styles.main}>
          <div className={styles.grid}>
            <Link href="about" className={styles.card}>
              <Typography variant="body1" className={inter.className}>
                About <span>-&gt;</span>
              </Typography>
            </Link>
            <Link href="what-is-devops" className={styles.card}>
              <Typography variant="body1" className={inter.className}>
                START HERE <span>-&gt;</span>
              </Typography>
            </Link>
            {/* <Link
              href="https://www.howeydesign.com"
              target="_blank"
              className={styles.card}
            >
              <Typography variant="body1" className={inter.className}>
                HoweyDesign<span>-&gt;</span>
              </Typography>
            </Link> */}
            {/* <Link href="#" className={styles.card}>
              <Typography variant="body1" className={inter.className}>
                TODO <span>-&gt;</span>
              </Typography>
            </Link> */}
          </div>

          <div className={styles.center}>
            <Typography variant="h3" color="#333">
              DevOps Notes App
            </Typography>
          </div>

          <div className={styles.grid}>
            <Link
              href="https://github.com/mhowey/devops-masterclass"
              target="_blank"
              className={styles.card}
            >
              <Typography variant="body1" className={inter.className}>
                <FiGithub
                  style={{ marginBottom: "-3px", marginRight: "5px" }}
                />
                github <MdOutlineOpenInNew style={{ marginBottom: "-3px" }} />
              </Typography>
            </Link>
            <Link
              href="https://www.howeydesign.com"
              target="_blank"
              className={styles.card}
            >
              <Typography variant="body1" className={inter.className}>
                HoweyDesign{" "}
                <MdOutlineOpenInNew style={{ marginBottom: "-3px" }} />
              </Typography>
            </Link>
          </div>
        </main>
      </ContentWrapper>
    </>
  );
}
