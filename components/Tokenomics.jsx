'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useI18n } from '../locales/client';
import Image from 'next/image';

const IconCard = ({ percentage, text, img, changeClassWithNetwork }) => {
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center ${changeClassWithNetwork}`}>
        <div className='sm:w-[70px] sm:h-[70px] xl:w-[80px] xl:h-[80px] mb-2 bg-white rounded-full flex justify-center items-center lg:w-[85px] lg:h-[85px] p-3 w-[50px] h-[50px] '>
          <Image
            src={img}
            alt={img}
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full'
          />
        </div>
        <p className='text-[#dcf14f] text-sm sm:text-base text-center'>
          {text}
        </p>
        <p className='text-xl text-center text-white sm:text-4xl'>
          {percentage}
        </p>
      </div>
    </>
  );
};

const svgString = `<svg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='512' height='512' x='0' y='0' viewBox='0 0 511.999 511.999' style='enable-background:new 0 0 512 512' xml:space='preserve' class=''><g><path d='M205.082 510.784c6.773 2.895 14.648.478 18.604-5.771l180-286A15.003 15.003 0 0 0 391 196H270.868l44.678-177.309c1.802-7.163-1.846-14.561-8.628-17.476-6.738-2.9-14.663-.469-18.604 5.771l-180 286A15.003 15.003 0 0 0 121 315.999h120.132l-44.678 177.309c-1.802 7.164 1.845 14.561 8.628 17.476z' fill='#111111' data-original='#000000' class=''></path></g></svg>`;

const Tokenomics = () => {
  const t = useI18n();

  const [copied, setCopied] = useState(false);
  const [network, setNetwork] = useState('ETH');
  const [mostDropDown, setMostDropDown] = useState(false);
  const [contract, setContract] = useState(
    '0x7db5af2B9624e1b3B4Bb69D6DeBd9aD1016A58Ac',
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(contract);
    setCopied(true);
  };

  const handleNetworkChange = (network) => {
    switch (network) {
      case 'eth':
        setNetwork('ETH');
        setCopied(false);
        setContract('0x7db5af2B9624e1b3B4Bb69D6DeBd9aD1016A58Ac');
        break;
      case 'bsc':
        setNetwork('BSC');
        setCopied(false);
        setContract('0x7db5af2B9624e1b3B4Bb69D6DeBd9aD1016A58Ac');
        break;
      case 'matic':
        setNetwork('MATIC');
        setCopied(false);
        setContract('0xf16ec50ec49abc95fa793c7871682833b6bc47e7');
        break;
      default:
        setNetwork('ETH');
        setCopied(false);
        setContract('0x7db5af2B9624e1b3B4Bb69D6DeBd9aD1016A58Ac');
        break;
    }
  };

  const icons = [
    { text: t('Reflections'), percentage: '1%', img: '/img/icon1.png' },
    { text: t('Marketing'), percentage: '4%', img: '/img/icon4.png' },
    { text: t('Treasury'), percentage: '4%', img: '/img/icon5.png' },
  ];

  return (
    <div
      className='flex flex-col items-center justify-center w-full h-full py-20 bg-black bg-no-repeat bg-cover sm:py-36'
      style={{
        backgroundImage: `url('/img/tokenomicsBg.png')`,
      }}>
      <div className='container flex flex-col items-center justify-center px-6 xl:px-0'>
        <div className='relative flex flex-col items-center justify-center text-center'>
          <h2 className='text-4xl'>{t('Our Tokenomics')}</h2>
          <p className='relative text-base sm:text-xl after:content-[""] after:flex after:justify-center after:items-center after:w-[16%] after:bg-[#c5d845] after:h-1 after:mt-8 after:rounded after:top-[92%] after:relative after:mx-auto'>
            {t(
              'We are on {ethereum} Blockchain, {binance} Smart Chain and {polygon} Chain',
              {
                ethereum: <strong>{t('Ethereum')}</strong>,
                binance: <strong>{t('Binance')}</strong>,
                polygon: <strong>{t('Polygon')}</strong>,
              },
            )}
          </p>
        </div>

        <div className='relative flex mt-16 mb-10 sm:gap-x-10 gap-x-6'>
          <button
            className={`px-3 lg:px-4 xl:px-6 py-2 lg:text-2xl   rounded-full sm:text-lg text-base ${
              network === 'ETH'
                ? 'bg-[#dcf14f] bg-opacity-100 text-black hover:bg-[#fffacd]'
                : 'bg-white  bg-opacity-20 hover:bg-opacity-50 text-white'
            }`}
            onClick={() => handleNetworkChange('eth')}>
            Ethereum
          </button>

          <button
            className={`px-3 lg:px-4 xl:px-6 py-2 lg:text-2xl   rounded-full sm:text-lg text-base  ${
              network === 'BSC'
                ? 'bg-[#dcf14f] bg-opacity-100 text-black hover:bg-[#fffacd]'
                : 'bg-white  bg-opacity-20 hover:bg-opacity-50 text-white'
            }`}
            onClick={() => handleNetworkChange('bsc')}>
            Binance
          </button>

          <button
            onClick={() => handleNetworkChange('matic')}
            className={`px-3 lg:px-4 xl:px-6 py-2 lg:text-2xl   rounded-full sm:text-lg text-base ${
              network === 'MATIC'
                ? 'bg-[#dcf14f] bg-opacity-100 text-black hover:bg-[#fffacd]'
                : 'bg-white  bg-opacity-20 hover:bg-opacity-50 text-white'
            }`}>
            Polygon
          </button>
        </div>

        {/* icons */}
        <div className='flex flex-wrap items-center justify-center w-full gap-5 sm:gap-x-16 xl:gap-x-20 sm:gap-0'>
          {icons.map((item, index) => {
            return (
              <IconCard
                key={index}
                text={item.text}
                percentage={item.percentage}
                img={item.img}
              />
            );
          })}
          <IconCard
            img='/img/icon2.png'
            percentage='2%'
            text={t('Liquidity Pool')}
            changeClassWithNetwork={`${
              network === 'BSC' ? 'hidden invisible' : ''
            }`}
          />
          <IconCard
            img='/img/icon3.png'
            text={t('Burns')}
            percentage={network === 'BSC' ? '4%' : '2%'}
          />
        </div>

        <div className='flex flex-col items-center justify-center w-full mt-10 gap-y-6'>
          <p className='text-xl'>{t('Our Contract')}</p>

          <div className='relative  flex px-4 py gap-x-4 py-4 bg-[#111c16] rounded-lg w-full sm:w-[700px] text-white items-center justify-center'>
            <p className='text-xl font-bold'>{network}</p>
            <input
              type='text'
              value={contract}
              readOnly
              className=' xl:text-sm text-xs bg-transparent outline-none   border-[#dcf14f] border-l-2 border-r-2 px-4 w-full items-center flex justify-center'
            />
            <button
              className='text-xl transition-all duration-200 hover:text-gray-300'
              onClick={handleCopy}>
              {copied ? t('Copied') : t('Copy')}
            </button>
          </div>

          <div className='flex flex-col items-center justify-center gap-y-8'>
            <Link
              className='bg-[#dcf14f] text-black px-4 py-3 sm:px-5 sm:py-3 xl:px-6 xl:py-3 rounded-lg lg:text-base xl:text-lg text-xs font-semibold flex items-center justify-center gap-x-2 hover:scale-105 transition-all duration-200'
              href='https://voltichange.net/'
              target='_blank'>
              <svg
                viewBox='0 0 512 512'
                width='34'
                height='34'
                dangerouslySetInnerHTML={{ __html: svgString }}
              />
              {t('BUY ON VOLTICHANGE')}
            </Link>

            <div className='flex flex-col items-center justify-center w-full gap-y-4'>
              <p>{t('Credit Cards Or Bank Transfer')}</p>
              <div className='relative flex flex-wrap items-center justify-center gap-4 sm:justify-center lg:gap-0 lg:gap-x-4'>
                <Link
                  className='text-sm border-[#dcf14f] border rounded p-2 hover:bg-[#dcf14f] hover:text-black transition-all duration-300'
                  href='https://buy.volt.indacoin.io/'
                  target='_blank'>
                  {t('Buy On IndaCoin')}
                </Link>
                <Link
                  className='text-sm border-[#dcf14f] border rounded p-2 hover:bg-[#dcf14f] hover:text-black transition-all duration-300'
                  href='https://changenow.io/currencies/volt'
                  target='_blank'>
                  {t('Buy on ChangeNOW')}
                </Link>
                <Link
                  className='text-sm border-[#dcf14f] border rounded p-2 hover:bg-[#dcf14f] hover:text-black transition-all duration-300'
                  href='https://guardarian.com/buy-volt'
                  target='_blank'>
                  {t('Buy on Guardarian')}
                </Link>
                <Link
                  className='text-sm border-[#dcf14f] border rounded p-2 hover:bg-[#dcf14f] hover:text-black transition-all duration-300'
                  href='https://changehero.io/?ref=7fc775dabda64add8641b2e13d10111c'
                  target='_blank'>
                  {t('Buy On ChangeHero')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
