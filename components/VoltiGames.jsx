import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const VoltiGames = () => {
  return (
    <div
      className='relative flex items-center justify-center w-full min-h-full text-black bg-white bg-left-bottom bg-no-repeat bg-contain'
      style={{
        backgroundImage: `url(/img/voltigames.png)`,
        backgroundSize: '50%',
      }}>
      <div className='container relative z-10 flex items-end justify-end  ml-[14%]'>
        <div className='relative flex flex-col items-end gap-y-6'>
          <div className='w-full'>
            <p className='text-[#a2b238] text-xl'>
              Play to Earn...and Get Volted!
            </p>
            <h2
              className=' text-6xl
          after:content-[""] after:flex after:justify-start after:items-start after:w-[16%] after:bg-[#c5d845] after:h-1  after:rounded  after:relative '>
              VoltiGames
            </h2>
          </div>

          <div className='flex flex-col gap-y-6'>
            <p className='whitespace-pre-wrap max-w-[70%]'>
              We offer multiple ways to earn <strong>$VOLT</strong> in Game-Fi
              and we keep on expanding through partnerships in 2023.
            </p>
            <ul className='relative flex flex-col gap-y-4'>
              <li className='flex items-center gap-x-2'>
                <input
                  type='checkbox'
                  checked={true}
                  readOnly
                  className='accent-[#a2b238] w-[22px] h-[22px] items-center'
                />
                <label className='pl-2 text-center tab:text-2xl mob:text-lg'>
                  Paying out <strong>monthly rewards</strong> to communities
                </label>
              </li>
              <li className='flex items-center gap-x-2'>
                <input
                  type='checkbox'
                  checked={true}
                  readOnly
                  className='accent-[#a2b238] w-[22px] h-[22px] justify-center items-center '
                />
                <label>
                  Offering <strong>buy-back and burns</strong> to top rated
                  projects
                </label>
              </li>
              <li className='flex items-center gap-x-2'>
                <input
                  type='checkbox'
                  checked={true}
                  readOnly
                  className='accent-[#a2b238] w-[22px] h-[22px] justify-center items-center '
                />
                <label>
                  NFT integrations of the <strong>Volted Dragons</strong>
                </label>
              </li>
            </ul>
          </div>

          <div className='w-full font-semibold'>Let's Play!</div>

          <div className='flex w-full gap-x-4'>
            <Link
              href='https://game.voltinu.in/'
              target='_blank'
              className='flex items-center justify-center px-4 py-3 bg-[#dcf14f] cursor-pointer gap-x-2 rounded text-black font-semibold hover:scale-105 transition-all duration-300'>
              <Image
                src='/img/control.svg'
                width={30}
                height={20}
                alt='control svg'
              />
              P2E RACER
            </Link>

            <Link
              href='https://store.steampowered.com/app/2340910/VDSC_Battle_Royale/'
              target='_blank'
              className='flex items-center justify-center px-4 py-3 bg-[#dcf14f] cursor-pointer gap-x-2 rounded text-black font-semibold hover:scale-105 transition-all duration-300'>
              <Image
                src='/img/control.svg'
                width={30}
                height={20}
                alt='control svg'
              />
              P2E RACER
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoltiGames;
