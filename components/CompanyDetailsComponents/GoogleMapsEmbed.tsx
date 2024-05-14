import React from 'react';

const GoogleMapsEmbed: React.FC<{ src: string; width: string; height: string }> = ({ src, width, height }) => {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      className="w-full h-full"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default GoogleMapsEmbed;
