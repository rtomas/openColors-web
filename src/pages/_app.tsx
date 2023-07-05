import './globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import dynamic from 'next/dynamic';
import { InkConfig } from 'useink';
import Head from 'next/head';

import { RococoContractsTestnet } from 'useink/chains';

const UseInkProvider: React.ComponentType<React.PropsWithChildren<InkConfig>> = dynamic(
  () => import('useink').then(({ UseInkProvider }) => UseInkProvider),
  {
    ssr: false,
  },
);

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Open Dream Colors | by Tomas Rawski</title>
        <meta
          name="description"
          content="
A blockchain education art project that creates a collaborative and immutable canvas using the colors of the dreams of individuals who interact with the artwork."
        />
      </Head>
      <UseInkProvider
        config={{
          dappName: 'openColors',
          chains: [RococoContractsTestnet],
          caller: {
            default: '5Dsykc2KUHcziwcTgZkHxyDDTotBJbGNh3BakfZ5PdDGMzfm',
          },
        }}
      >
        <Component {...pageProps} />
      </UseInkProvider>
    </>
  );
}

export default App;
