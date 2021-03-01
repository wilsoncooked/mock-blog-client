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
        <h3>Staticly Generated on the {post.timeStamp}</h3>
        <img src={post.image} width="600px" />
        <p className={styles.blog}>{post.blog}</p>
      </main>
    </div>
  )
}

// STATIC SITE GENERTION

export async function getStaticProps({ params }) {
  const req = await fetch(
    `https://mock-blog-server.herokuapp.com/posts/${params.id}`
  )
  const data = await req.json()
  return {
    props: { post: { ...data, timeStamp: new Date().toLocaleString() } }
  }
}

export async function getStaticPaths() {
  const req = await fetch(`https://mock-blog-server.herokuapp.com/post-names`)
  const data = await req.json()

  const paths = data.map(post => {
    return { params: { id: post } }
  })

  return {
    paths,
    fallback: false
  }
}
