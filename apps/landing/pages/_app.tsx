import { Global } from '@wowjob/atom';
import { AppProps } from 'next/app';
import Head from 'next/head';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Welcome to landing!</title>
      </Head>

      <main>
        <Global />

        <Component {...pageProps} />
      </main>
    </>
  );
};

export default CustomApp;
