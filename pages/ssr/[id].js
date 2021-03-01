import { useRouter } from "next/router"
import Head from "next/head"
import styles from "../../styles/Home.module.css"

export default function SSG({ post }) {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className={styles.container}>
      <Head>
        <title>{id}</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{post.name}</h1>
        <h3>Server side rendered on the {post.timeStamp}</h3>
        <img src={post.image} width="600px" />
        <p className={styles.blog}>{post.blog}</p>
      </main>
    </div>
  )
}

// SERVER SIDE RENDERING

export async function getServerSideProps({ params }) {
  const req = await fetch(
    `https://mock-blog-server.herokuapp.com/posts/${params.id}`
  )
  const data = await req.json()

  return {
    props: { post: { ...data, timeStamp: new Date().toLocaleString() } }
  }
}
