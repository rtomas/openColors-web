import React, { useState } from 'react';
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';
import ConnectWallet from './ConnectWallet';
import { useWallet } from 'useink';
import AddColor from './AddColor';
import LastestColors from './LastestColors';

const Menu = () => {
  const { account } = useWallet();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return showMenu ? (
    <div className="absolute mt-[13px] flex flex-col gap-5 md:w-fit h-[97vh] backdrop-blur-3xl bg-black/50 border-r border-t border-b border-white rounded-r-xl p-4">
      <div className="mx-auto w-full h-fit flex">
        <button
          className="p-1 border border-white rounded-full ml-auto text-xl"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <BiLeftArrowAlt />
        </button>
      </div>
      <div className="text-center">Open Dream Colors</div>
      <ConnectWallet />
      {account && <AddColor />}
      <div>
        <p>
          Tutorials: <br />+{' '}
          <a
            href="https://rtomas.hashnode.dev/how-to-use-the-open-dream-colors-art-app-with-your-own-wallet-and-ask-for-rocs"
            target="_blank"
            className="underline"
          >
            A beginner&apos;s guide to interacting with the App Art!
          </a>
          <br />+{' '}
          <a className="underline" href="https://rtomas.hashnode.dev/create-a-smart-contract-in-ink" target="_blank">
            Explain smart contracts in ink!
          </a>
          <br />+ Explain the UI with next.js & useink library (soon !) <br />
          <br />
        </p>
        <p>
          Tutorial en Español: <br />+{' '}
          <a
            href="https://rtomas.hashnode.dev/como-usar-la-obra-open-dream-colors-el-color-de-tus-suenos-con-tu-propia-billetera-virtual-y-pedir-por-los-tokens-rocs"
            target="_blank"
            className="underline"
          >
            ¿Cómo instalar tu propia billetera virtual, pedir ROCs y usar la obra?
          </a>
          <br />
          <br />
        </p>
        <p>Links:</p>
        <p>
          *{' '}
          <a target="_blank" href="https://github.com/rtomas/openColors-web" className="underline">
            UI Github
          </a>
        </p>
        <p>
          *{' '}
          <a target="_blank" href="https://github.com/rtomas/openColors" className="underline">
            Smart Contract Github
          </a>
        </p>
        <p>
          *{' '}
          <a target="_blank" href="https://www.subwallet.app/download.html" className="underline">
            Install subwallet extension to interact
          </a>
        </p>
        <p>
          *{' '}
          <a target="_blank" href="https://use.ink/faucet/" className="underline">
            Ask for Roc tokens
          </a>
        </p>
        <br />
        <div className="text-center">WIP by Tomás Rawski</div>
      </div>
    </div>
  ) : (
    <div className="absolute w-[100px] border-white text-white flex py-4">
      <div className="mx-auto">
        <button
          className="p-1 border border-white text-white rounded-full backdrop-blur-2xl text-xl"
          onClick={() => {
            setShowMenu(true);
          }}
        >
          <BiRightArrowAlt />
        </button>
      </div>
    </div>
  );
};

export default Menu;
