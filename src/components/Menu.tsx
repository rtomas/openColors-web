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
          Tutorials (soon !): <br />+ How to use the app with a wallet and ROCs <br />+ Explain the smart contract in
          ink! <br />+ Explain the UI with next.js & useink library <br />
          <br />
        </p>
        <p>Links:</p>
        <p>
          *{' '}
          <a target="_blank" href="https://github.com/rtomas/openColors-web">
            UI Github
          </a>
        </p>
        <p>
          *{' '}
          <a target="_blank" href="https://github.com/rtomas/openColors">
            Smart Contract Github
          </a>
        </p>
        <p>
          *{' '}
          <a target="_blank" href="https://www.subwallet.app/download.html">
            Install subwallet extension to interact
          </a>
        </p>
        <p>
          *{' '}
          <a target="_blank" href="https://use.ink/faucet/">
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
