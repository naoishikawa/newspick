import Head from 'next/head'
import MainLayout from '../layouts'
import styles from '../styles/Home.module.scss'
import Article from '../components/article'

export default function Home(props) {

  return (
    <MainLayout>
      <Head>
        <title>News Pick</title>
      </Head>

    <div className={styles.main}>
      <Article title='headline' articles={props.topArticle} />
    </div>
    </MainLayout>
  )
}

export const getStaticProps = async() => {
  const pageSize = 10;
  const topRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=3ed191ef191646d0bc04a4ea1707248c`
  );

  const topJson = await topRes.json();
  const topArticle = topJson?.articles;

  return{
    props: {
      topArticle,
    },
    revalidate: 60 * 10,
  }
}