import React from 'react';
import Image from 'next/image';

const WolfAvatar = () => {
  return (
    <Image
      src='/img/wolf.png'
      sizes='100vw'
      width={1920}
      height={1080}
      alt='wolf background'
      className='object-fill min-w-full min-h-full lg:object-cover translate-z-0'
      priority={true}
    />
  );
};

export default WolfAvatar;
