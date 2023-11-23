import Image from 'next/image';
import { useState, useEffect } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { useWallet, useInstalledWallets } from 'useink';

export const ConnectWallet = () => {
  const { account, accounts, setAccount, connect, disconnect } = useWallet();
  const wallets = useInstalledWallets();

  const [showAccounts, setShowAccounts] = useState<boolean>(false);
  const [showWallets, setShowWallets] = useState<string[]>([]);

  return (
    <div className="min-w-[300px] bg-gray-800 border border-gray-600 rounded-lg p-2 text-base flex flex-col gap-3">
      {account ? (
        <>
          <div className="flex justify-between items-center gap-2">
            <p>{account?.name}</p>
            {showAccounts ? (
              <button
                onClick={() => setShowAccounts(false)}
                className="text-xl rounded border border-gray-600 hover:bg-gray-700 transition duration-200 bg-gray-800"
              >
                <BiChevronUp />
              </button>
            ) : (
              <button
                onClick={() => setShowAccounts(true)}
                className="text-xl rounded border border-gray-600 hover:bg-gray-700 transition duration-200 bg-gray-800"
              >
                <BiChevronDown />
              </button>
            )}
          </div>
          {showAccounts && <hr />}
          {showAccounts &&
            accounts?.map((a, index) => (
              <button
                key={index}
                className="rounded p-1 text-left hover:bg-gray-700 transition duration-200"
                onClick={() => setAccount(a)}
              >
                {a?.name}
              </button>
            ))}

          <button
            className="bg-gray-800 p-1 w-full rounded border border-gray-600 hover:bg-gray-700 transition duration-200"
            onClick={disconnect}
          >
            Disonnect Wallet
          </button>
        </>
      ) : (
        <div className="flex flex-col gap-2">
          <p>Wallets</p>
          {wallets?.map((w, index) => (
            <button
              key={w.title}
              className="flex items-center gap-2 bg-gray-800 p-1 w-full rounded border border-gray-600 hover:bg-gray-700 transition duration-200"
              onClick={() => connect(w.extensionName)}
            >
              Connect to {w.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;
