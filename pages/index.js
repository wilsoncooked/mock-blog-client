import Head from "next/head"
import Link from "next/link"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainWrapper}>
        <div className={styles.main}>
          <h2 className={styles.mainTitle}>SSR</h2>
          <ul className={styles.postsList}>
            <li>
              <Link href="/ssr/flowers">
                <a>Flowers</a>
              </Link>
            </li>
            <li>
              <Link href="/ssr/mountains">
                <a>Mountains</a>
              </Link>
            </li>
            <li>
              <Link href="/ssr/ocean">
                <a>Ocean</a>
              </Link>
            </li>
            <li>
              <Link href="/ssr/woods">
                <a>Woods</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.main}>
          <h2 className={styles.mainTitle}>SSG</h2>
          <ul className={styles.postsList}>
            <li>
              <Link href="/ssg/flowers">
                <a>Flowers</a>
              </Link>
            </li>
            <li>
              <Link href="/ssg/mountains">
                <a>Mountains</a>
              </Link>
            </li>
            <li>
              <Link href="/ssg/ocean">
                <a>Ocean</a>
              </Link>
            </li>
            <li>
              <Link href="/ssg/woods">
                <a>Woods</a>
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
