import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Input from '../src/components/input';
import { useRouter } from 'next/router';

export default function Home({list}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Universário - by MichelVVS </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Universário
        </h1>

        <p className={styles.description}>
          O universo no dia em que você nasceu.
        </p>
        <p>A música Nº1 na Billboard quando você nasceu era: {list[1].title} - {list[1].artist}</p>

        <div className={styles.grid}>
          <Input />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <strong>Michel Souza</strong>
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/billboard/1991-03-07');
  const json = await res.json();

  return {
    props: {
      list: json.list
    }
  };

}
