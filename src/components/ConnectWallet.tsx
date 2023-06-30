import Image from "next/image";
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useWallet, useAllWallets } from "useink";

export const ConnectWallet = () => {
  const { account, accounts, setAccount, connect, disconnect } = useWallet();

  const [showAccounts, setShowAccounts] = useState<boolean>(false);

  return (
    <div className="min-w-[470px] bg-gray-800 border border-gray-600 rounded-lg p-2 text-base flex flex-col gap-3">
      {account ? (
        <>
          <div className="flex justify-between items-center gap-2">
            <p>{account?.address}</p>
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
            accounts?.map((a) => (
              <button
                key={a}
                className="rounded p-1 text-left hover:bg-gray-700 transition duration-200"
                onClick={() => setAccount(a)}
              >
                {a?.address}
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
        <button
          className="bg-gray-800 p-1 w-full rounded border border-green-600 hover:bg-gray-700 transition duration-200"
          onClick={() => connect("polkadot-js")}
        >
          Connect to Polkadot.Js
        </button>
      )}
    </div>
  );
};

export default ConnectWallet;
