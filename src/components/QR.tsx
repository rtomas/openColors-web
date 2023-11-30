import React from 'react';
import QRCode from 'react-qr-code';

const QR = () => {
  return (
    <div className="absolute top-0 right-0 m-5 p-2 bg-white rounded">
      <QRCode
        size={120}
        style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
        // TODO:LINK
        value={'https://www.tomasrawski.com.ar/projects/open-dream-colors.html'}
        viewBox={`0 0 120 120`}
      />
    </div>
  );
};

export default QR;
