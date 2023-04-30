import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return(<>
  <Head>
    <title>Khabi</title>
  </Head>
   <Component {...pageProps} />
  </>)
}
