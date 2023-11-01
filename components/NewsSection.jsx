import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

const NewsCard = ({ img, link, title, date, text }) => {
  return (
    <article className='flex flex-col p-6 overflow-hidden text-black bg-white rounded-xl w-full lg:w-[80%] space-y-4 h-auto shadow-lg shadow-black'>
      <figure className='overflow-hidden aspect-video'>
        <Image
          src={img}
          alt={img}
          sizes='100vw'
          width={0}
          height={0}
          className='object-contain w-full h-full'
        />
      </figure>
      <div className='flex flex-col gap-y-3'>
        <h3 className='text-xl font-semibold'>{title}</h3>
        <p>{date}</p>
        <p className='text-lg tracking-wider'>{text}</p>
        <div className='flex mt-2 overflow-hidden'>
          <Link
            href={link}
            target='_blank'
            className='flex items-center gap-x-2 justify-center text-start px-6 py-3 cursor-pointer group hover:bg-[#1b2d25] hover:text-white rounded text-[#1b2d25] font-semibold transition-all duration-300 border-[#1b2d25] border'>
            READ ARTICLE
            <BsArrowRight className='w-5 h-5 translate-y-[300%] group-hover:translate-y-0 delay-150 transition-all duration-300 text-white' />
          </Link>
        </div>
      </div>
    </article>
  );
};

const NewsSection = () => {
  const newsTrend = [
    {
      img: '/img/logo-gokh-news.png',
      link: 'https://www.gokhshteinmedia.com/article/volt-inu-supercharges-the-true-spirit-of-crypto',
      title: 'Gokhshtein Media',
      date: '23 september 2022',
      text: 'Volt Inu Supercharges the True Spirit of Crypto.',
    },
    {
      img: '/img/logo-yahoo-news.png',
      link: 'https://www.yahoo.com/news/voltichange-expands-market-reach-widget-125900376.html',
      title: 'Yahoo! Finance',
      date: '23 january 2023',
      text: 'VoltiChange Expands Market Reach with Widget and Deflationary Strategy.',
    },
    {
      img: '/img/logo-bloomberg-news.png',
      link: 'https://www.bloomberg.com/press-releases/2023-02-06/volt-inu-volt-already-making-crazy-returns-before-the-bull-run',
      title: 'Bloomberg',
      date: '06 february 2023',
      text: 'Volt Inu already making crazy returns before the bull run.',
    },
    {
      img: '/img/logo-coindesk-news.png',
      link: 'https://www.coindesk.com/markets/2023-02-14/volt-inu-community-passes-vote-for-75m-token-burn-plans-polygon-network-expansion/?utm_campaign=coindesk_main&utm_source=twitter&utm_term=organic&utm_medium=social&utm_content=editorial',
      title: 'CoinDesk',
      date: '14 february 2023',
      text: 'Volt Inu Community Passes Vote for $75M Token Burn. Plans Polygon Network Expansion.',
    },
  ];

  return (
    <div className='flex flex-col items-center justify-center w-full h-full py-10 overflow-hidden xl:py-12 2xl:py-20'>
      <div className='text-[#1b2d25] text-center'>
        <h4 className='mb-2 text-5xl lg:text:6xl xl:text-8xl'>
          Volt Inu in the News
        </h4>
        <p className='text-2xl lg:text-3xl xl:text-4xl'>
          See who's writing about us
        </p>
      </div>
      <div className='container grid grid-cols-1 gap-6 p-10 lg:grid-cols-2 -full'>
        {newsTrend.map((item, index) => {
          return <NewsCard key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default NewsSection;
