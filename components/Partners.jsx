import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getI18n } from '../locales/server';

const CardTemplate = ({ link, img, text }) => {
  return (
    <Link
      href={link}
      target='_blank'
      className='flex flex-col items-center justify-center py-2 px-1.5 text-white bg-white rounded w-[300px] h-[200px] xl:w-[140px] xl:h-[240px] transition-all duration-300 hover:scale-105'>
      <div className='w-full h-[80%]'>
        <Image
          src={img}
          sizes='100vw'
          width={0}
          height={0}
          alt={img}
          className='relative object-contain w-full h-full'
        />
      </div>
      <div className='bg-[#1b2d25] rounded w-full flex items-center justify-center min-h-[20%] font-semibold h-[20%] text-xs '>
        <p className='text-center'>{text}</p>
      </div>
    </Link>
  );
};

const Partners = async () => {
  const t = await getI18n();

  const partnersLinks = [
    {
      img: '/img/world1.png',
      text: 'USM.WORLD',
      link: 'https://usm.world/',
    },
    {
      img: '/img/elon1.png',
      text: 'ELON GOAT',
      link: 'https://elongoat.io/',
    },
    {
      img: '/img/prdt1.png',
      text: 'PRDT',
      link: 'https://voltinu.in/predictions.html',
    },
    {
      img: '/img/shopping2.png',
      text: 'SHOPPING.io',
      link: 'https://shopping.io/',
    },
    {
      img: '/img/now2.png',
      text: 'NOW PAYMENTS',
      link: 'https://nowpayments.io/status-page',
    },
    {
      img: '/img/openLeverage1.png',
      text: 'LEVERAGE',
      link: 'https://openleverage.finance/',
    },
    {
      img: '/img/fcf1.png',
      text: 'FCF PAY',
      link: 'https://fcfpay.com/',
    },
    {
      img: '/img/oakase1.png',
      text: 'OKSE',
      link: 'https://okse.io/',
    },
    {
      img: '/img/yieldification1.png',
      text: 'Yieldification',
      link: 'https://yieldification.com/',
    },
    {
      img: '/img/crycard1.png',
      text: 'CRYPTOCART',
      link: 'https://cryptocart.cc/',
    },
  ];

  return (
    <div className='relative h-auto min-w-full min-h-full'>
      <div className='relative flex flex-col items-center justify-center w-full h-full'>
        <div className='container p-10'>
          <div className='flex flex-col items-center justify-center '>
            <h2 className='text-4xl font-semibold'>{t('Our Partners')}</h2>
            <p className='text-xl '>
              {t(
                'We belive in working together and just place a nice quote here',
              )}
            </p>
          </div>

          <div className='grid items-center justify-center grid-cols-1 mt-10 xl:gap-10 lg:gap-6 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5'>
            {partnersLinks.map((item, index) => {
              return (
                <CardTemplate
                  link={item.link}
                  img={item.img}
                  text={item.text}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
