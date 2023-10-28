'use client';
import React from 'react';
import Link from 'next/link';

const Dex = () => {
  const svgString = `<svg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='512' height='512' x='0' y='0' viewBox='0 0 511.999 511.999' style='enable-background:new 0 0 512 512' xml:space='preserve' class=''><g><path d='M205.082 510.784c6.773 2.895 14.648.478 18.604-5.771l180-286A15.003 15.003 0 0 0 391 196H270.868l44.678-177.309c1.802-7.163-1.846-14.561-8.628-17.476-6.738-2.9-14.663-.469-18.604 5.771l-180 286A15.003 15.003 0 0 0 121 315.999h120.132l-44.678 177.309c-1.802 7.164 1.845 14.561 8.628 17.476z' fill='#48510a' data-original='#48510a' class=''></path></g></svg>`;

  return (
    <div
      className='relative flex items-center justify-center w-full h-full bg-white bg-right-top bg-no-repeat bg-contain py-36'
      style={{
        backgroundImage: 'url(/img/phones.png)',
        backgroundPosition: 'right top',
        backgroundPositionX: '1200px',
      }}>
      <div className='container relative min-h-full px-32 '>
        <p className='text-2xl text-[#a2b238]'>The number one DEX</p>
        <h2 className='text-4xl text-black truncate lg:mb-4 voltichange_text:text-[50px] voltichange_text:leading-14 py-4'>
          VoltiChange
        </h2>
        <p className='text-black max-w-[700px]'>
          Our DEX allows projects to get listed in a free and permissionless way
          and makes them become deflationary by burning their supply.
        </p>

        <div className='flex flex-col mt-10 text-black'>
          <div className='flex items-center justify-start mb-4 text-xl '>
            <input
              type='checkbox'
              checked={true}
              readOnly
              className='accent-[#a2b238] w-[22px] h-[22px] justify-center items-center mt-1'
            />
            <label className='pl-2 text-center tab:text-2xl mob:text-lg'>
              No <strong>liquidity</strong> to add
            </label>
          </div>
          <div className='flex items-center justify-start mb-4 text-xl'>
            <input
              type='checkbox'
              checked={true}
              readOnly
              className='accent-[#a2b238] w-[22px] h-[22px] justify-center items-center mt-1'
            />
            <label className='pl-2 text-center tab:text-2xl mob:text-lg'>
              <strong>0.25% fee burning</strong> your supply while trading
            </label>
          </div>
          <div className='flex items-center justify-start mb-4 text-xl'>
            <input
              type='checkbox'
              checked={true}
              readOnly
              className='accent-[#a2b238] w-[22px] h-[22px] justify-center items-center mt-1'
            />
            <label className='pl-2 text-center tab:text-2xl mob:text-lg'>
              A fully{' '}
              <Link
                href='https://voltichange.net/widget'
                target='_blank'
                className='text-[#687321] hover:text-black cursor-pointer underline'>
                customizable widget
              </Link>{' '}
              to place on your own website
            </label>
          </div>

          <div className='mt-4'>
            <Link
              className='px-4 py-3 bg-[#687321] text-white font-semibold flex rounded-lg mt-4 cursor-pointer hover:scale-105 transition-all duration-200 text-xl gap-x-2 w-[400px] items-center justify-center'
              href='https://voltichange.net/'
              target='_blank'>
              <svg
                viewBox='0 0 512 512'
                width='34'
                height='34'
                dangerouslySetInnerHTML={{ __html: svgString }}
              />
              BUY ON VOLTICHANGE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dex;

/* resolver translate depois */
