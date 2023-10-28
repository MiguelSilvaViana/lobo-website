import React from 'react';
import Image from 'next/image';

const WolfAvatar = () => {
  return (
    <div className='xl:max-w-none'>
      <Image
        src='/img/wolf.png'
        sizes='100vw'
        width={0}
        height={0}
        alt='wolf background'
        className='min-w-full min-h-full bg-contain translate-z-0'
      />
    </div>
  );
};

export default WolfAvatar;
