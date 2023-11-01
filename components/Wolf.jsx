import React from 'react';
import WolfAvatar from './WolfAvatar';
import CardHome from './CardHome';
import { getI18n } from '../locales/server';

const Wolf = async () => {
  const t = await getI18n();
  const cards = [
    {
      img: '/img/money.svg',
      text: t(
        'is a decentralized exchange allowing projects to get listed in a free and permissionless way.',
      ),
      highlighted: 'VoltiChange',
      link: 'https://voltichange.net/',
    },
    {
      img: '/img/nft.svg',
      text: 'is our NFT collection Which you can use in future gaming integrations and will give you rewards in real life.',
      highlighted: 'VDSC',
      link: 'https://volteddragons.com/',
    },
    {
      img: '/img/game.svg',
      text: "includes a P2E racing game and offers rewards plus buy-back & burns, all integrated with our volted NFT'S.",
      highlighted: 'VoltiGames',
      link: 'https://game.voltinu.in/',
    },
    {
      img: '/img/interrogation.svg',
      text: 'is still a mystery and will be launched somewhere in 2023. Stay tuned for our bullish announcement',
      highlighted: 'VoltiFlex',
      link: 'https://twitter.com/VoltInuOfficial/status/1618020329334673408?t=dno8y3sr17Qo4Biwyf8BXA&s=19',
    },
  ];

  return (
    <div className='relative flex items-center justify-center w-full h-full overflow-hidden '>
      {/* wolf logo */}
      <div className='absolute inset-0 bottom-0 left-[80%] lg:left-[50%]  w-screen min-h-full'>
        <WolfAvatar />
      </div>

      <div className='container z-10 flex flex-col items-start justify-center h-full px-10 py-32 sm:px-24'>
        <h1 className='relative text-4xl font-semibold leading-relaxed lg:text-5xl xl:text-6xl'>
          <span className='text-[#687321]'>Volt Inu</span>
          <br />
          <span className='text-[#dcf14f] after:content-[""] after:absolute after:w-[26%] sm:after:w-[16%] after:bg-white after:h-1 after:rounded xl:after:top-[96%] after:left-2 after:top-[98%]'>
            The People's Crypto
          </span>
        </h1>

        <div className='mt-4 xl:mt-2 max-w-[36rem]'>
          <p>
            Volt Inu is an ecosystem aimed at becoming a one-stop shop offering
            DeFi products while bringing profits back to the native token to
            support its deflationary purpose.
          </p>
        </div>

        <div className='mt-6 mb-6 xl:mt-8'>
          <p className='text-[#c5d845]'>Our ecosystem</p>
        </div>

        <div className='grid items-center justify-center grid-cols-1 gap-4 xl:grid-cols-2'>
          {cards.map((item, index) => {
            return (
              <CardHome
                key={index}
                text={item.text}
                img={item.img}
                link={item.link}
                highlighted={item.highlighted}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Wolf;
