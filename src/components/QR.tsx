import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { BiQr } from 'react-icons/bi';

const QR = () => {
  const [showQR, setShowQR] = useState(false);
  return showQR ? (
    <div onClick={() => setShowQR(false)} className="absolute top-0 right-0 p-2 m-5 bg-white rounded cursor-pointer">
      <QRCode
        size={256}
        style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
        // TODO:LINK
        value={'https://opencolors.tomasrawski.com.ar/'}
        viewBox={`0 0 256 256`}
      />
    </div>
  ) : (
    <button
      className="absolute top-0 right-0 m-5 p-2 border border-white text-white rounded-full backdrop-blur-2xl text-xl"
      onClick={() => {
        setShowQR(true);
      }}
    >
      <BiQr />
    </button>
  );
};

export default QR;
