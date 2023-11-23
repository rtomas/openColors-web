import React from 'react';
import QRCode from 'react-qr-code';

const QR = () => {
  return (
    <div className="absolute top-0 right-0 m-5 p-2 bg-white rounded">
      <QRCode
        size={256}
        style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
        // TODO:LINK
        value={'https://opencolors.tomasrawski.com.ar/'}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};

export default QR;
