import '../styles/globals.css'
import {AppProps} from "next/dist/next-server/lib/router/router"
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
      <Head>
        <title>my top</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet"/>
        <meta charSet="UTF-8"/>
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
      </Head>
      <Component {...pageProps} />
  </>
}

export default MyApp
