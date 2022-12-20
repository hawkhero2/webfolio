import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import styles from '../styles/Home.module.css'

function Section(props: any) {

  return (
    <div className={styles.section}>
      {/* section containing title, short description and link towards the github repo,
      idealy information fetched from a database
      */}
      <div className={styles.title}>
        <h1>
          {props.title}
        </h1>
      </div>
      <div className={styles.description}>
        <p>
          {props.description}
        </p>
      </div>
    </div>

  )
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ivanciu Andrei</title>
        <meta name="Portfolio" content="Ivanciu Andrei's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <p>
            Hello, my name is Ivanciu Andrei and I am a self-taught software developer.
          </p>
        </div>
        <div className={styles.container}>
          <p>
            Bellow you will find some of my projects and link towards my leetcode profile
          </p>
        </div>

        <div className={styles.section}>
          <p>
            Project name here
          </p>

        </div>
        <div className={styles.section}>
          <p>
            <a href="https://github.com/hawkhero2">Ivanciu</a>
          </p>
        </div>
        <Section title="test 1" description="test description" />
        <Section title="test 2" description="test description" />
        <Section title="test 3" description="test description" />

      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/andrei-ivanciu-170a7617a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed by {'Ivanciu Andrei '}
        </a>
      </footer>
    </div>
  )
}

export default Home
