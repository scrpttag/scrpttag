import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import 'tailwindcss/tailwind.css'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Source Sans Pro', sans-serif;
  }
`

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Scrpttag</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#181a1b" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="msapplication-TileColor" content="#f5f6f7" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
