import * as React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <Head>
        <title>next-boiler</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;