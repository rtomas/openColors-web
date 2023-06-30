import "./globals.css";
import type { AppProps } from "next/app";
import React from "react";
import dynamic from "next/dynamic";
import { InkConfig } from "useink";

import { RococoContractsTestnet } from "useink/chains";

const UseInkProvider: React.ComponentType<React.PropsWithChildren<InkConfig>> = dynamic(() => import("useink").then(({ UseInkProvider }) => UseInkProvider), {
    ssr: false,
});

function App({ Component, pageProps }: AppProps) {
    return (
        <UseInkProvider
            config={{
                dappName: "openColors",
                chains: [RococoContractsTestnet],
                caller: {
                    default: "5Dsykc2KUHcziwcTgZkHxyDDTotBJbGNh3BakfZ5PdDGMzfm",
                },
            }}
        >
            <Component {...pageProps} />
        </UseInkProvider>
    );
}

export default App;
