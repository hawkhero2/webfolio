import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'


const About: NextPage = () => {
    return(
        <div className={styles.container}>
            <Head>
            <title>Ivanciu Andrei</title>
            <meta name="Portfolio" content="Ivanciu Andrei's Portfolio" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    )
}

export default About