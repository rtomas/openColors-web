import Image from "next/image";
import { useWallet, useAllWallets } from "useink";

export const ConnectWallet = () => {
    const { account, connect, disconnect } = useWallet();
    const wallets = useAllWallets();

    if (!account) {
        return (
            <ul>
                {wallets.map((w) => (
                    <li key={w.title}>
                        {w.installed ? (
                            <button onClick={() => connect(w.extensionName)}>Connect to {w.title}</button>
                        ) : (
                            <a href={w.installUrl}>Install {w.title}</a>
                        )}
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <>
            <p>You are connected as {account?.name || account.address}</p>

            <button onClick={disconnect}>Disonnect Wallet</button>
        </>
    );
};

export default ConnectWallet;
