import Head from 'next/head'
import 'tailwindcss/tailwind.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Scrpttag</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
