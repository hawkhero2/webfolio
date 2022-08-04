import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const TestPage: NextPage = () => {
    return(
        <div className={styles.container}>
            <Head>
                <title>Create Test Page App</title>                
            </Head>
        
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Return to <Link href="/">Home</Link>
                </h1>
            </main>
        </div>
    )
}
export default TestPage