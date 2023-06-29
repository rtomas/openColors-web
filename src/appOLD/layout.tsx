import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "openColors by Tomas Rawski | Deployed in Polkadot ecosystem and vercel",
    description: "List of colors save in an on-chain smart contract and deployed in Polkadot ecosystem.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
