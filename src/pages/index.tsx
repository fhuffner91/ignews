import styles from './home.module.scss';
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
              News about the <span>React</span> world
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.99 month</span>
          </p>
        </section>
        <img src="/images/avatar.svg" alt="girl Coding" />
      </main>
    </>
  );
}
