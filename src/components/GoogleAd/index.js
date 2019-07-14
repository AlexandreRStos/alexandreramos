import React from 'react';

const GoogleAd = ({ client, slot, format = 'auto' }) => (
  <div>
    <ins className="adsbygoogle" data-ad-client={client} data-ad-slot={slot} data-ad-format={format} />
  </div>
);
export default GoogleAd;
