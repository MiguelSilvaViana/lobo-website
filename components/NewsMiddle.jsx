import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* refatorar com um array ao inves de varios assim e colocar os links bonitinho */

const NewsMiddle = () => {
  const images = [
    {
      img: '/img/yahoo.png',
      alt: 'yahoo logo',
      link: 'https://www.yahoo.com/news/voltichange-expands-market-reach-widget-125900376.html',
    },
    {
      img: '/img/investing.png',
      alt: 'investing logo',
      link: 'https://www.investing.com/news/cryptocurrency-news/volt-inu-announces-pancakeswap-listing-as-ethbsc-bridge-looms-2734932',
    },
    {
      img: '/img/nasdaq.png',
      alt: 'nasdaq logo',
      link: 'https://www.nasdaq.com/press-release/volt-inu-partners-with-cryptocart-following-its-listing-announcement-on-bkex-global',
    },
    {
      img: '/img/cryptela.png',
      alt: 'cryptela logo',
      link: 'https://www.cryptela.com/en/blog/volt-inu-announces-pancakeswap-listing-as-ethbsc-bridge-looms',
    },
    {
      img: '/img/bloomberg.png',
      alt: 'bloomberg logo',
      link: 'https://www.bloomberg.com/press-releases/2022-01-18/volt-inu-partners-with-cryptocart-following-its-listing-announcement-on-bkex-global',
    },
  ];
  return (
    <div className='w-full sm:h-[400px]  flex justify-center items-center shadow-inner h-[300px] bg-gray-100 border-y-[#ddd] border-y'>
      <div className='m-0 marquee'>
        <div className='marquee--inner'>
          <div className='flex gap-20'>
            {images.map((item, index) => {
              return (
                <Link href={item.link} key={index}>
                  <Image
                    src={item.img}
                    width={300}
                    height={300}
                    className='img min-w-[150px] min-h-[150px] object-contain'
                    alt={item.alt}
                  />
                </Link>
              );
            })}
          </div>
          <div className='flex gap-20'>
            {images.map((item, index) => {
              return (
                <Link href={item.link} key={index}>
                  <Image
                    src={item.img}
                    width={300}
                    height={300}
                    className='img min-w-[150px] min-h-[150px] object-contain'
                    alt={item.alt}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsMiddle;
