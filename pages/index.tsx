import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>HBashanaE</title>
        <meta
          name="description"
          content="Bashana Elikewela is a software engineer with a focus on creating fast, secure, and reliable solutions. He is dedicated to delivering the best possible outcomes and am known for my attention to detail and commitment to quality."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.navbar}></div>
        <div className={`${inter.className} ${styles.introduction}`}>
          <div className={styles.line1}>Hi, I am</div>
          <div className={styles.line2}>Bashana Elikewela.</div>
          <div className={styles.line3}>I build solutions.</div>
          <div className={styles.description}>
            I am a software engineer with a focus on creating fast, secure, and
            reliable solutions. I am dedicated to delivering the best possible
            outcomes and am known for my attention to detail and commitment to
            quality.
          </div>
        </div>
      </main>
    </>
  );
}
