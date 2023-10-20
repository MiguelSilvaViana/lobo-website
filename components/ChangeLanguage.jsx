'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useChangeLocale, useCurrentLocale } from '../locales/client';

const languageOptions = [
  { name: 'English', src: '/img/flagEua.png', alt: 'flag eua', lang: 'en' },
  {
    name: 'Deutsch',
    src: '/img/flagGerman.png',
    alt: 'flag german',
    lang: 'de',
  },
  {
    name: 'Español',
    src: '/img/flagSpanish.jpg',
    alt: 'flag spanish',
    lang: 'es',
  },
  {
    name: 'Português',
    src: '/img/flagPortuguese.jpg',
    alt: 'flag portuguese',
    lang: 'pt',
  },
  { name: 'Türkçe', src: '/img/flagTurko.png', alt: 'flag turkey', lang: 'tr' },
  {
    name: '中文（简体)',
    src: '/img/flagChinese.png',
    alt: 'flag chinese',
    lang: 'zh',
  },
];

const ChangeLanguage = () => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  const [language, setLanguage] = useState('English');

  return (
    <div className='flex flex-col'>
      <button className='flex items-center px-5 py-2 rounded gap-x-4'>
        <p className='text-xl text-white'>{language}</p>
        <Image
          src='/img/flagEua.png'
          alt='flag eua'
          width={40}
          height={40}
          className='object-cover rounded-full w-[40px] h-[40px]'
        />
        <ChevronDown className='w-5 h-5 text-white' />
      </button>

      <div className='relative w-full h-full'>
        {/* options */}
        <div className='flex flex-col bg-[#0f1411] rounded px-5 py-4 gap-y-6 absolute top-8 w-[260px]'>
          {languageOptions.map((item, index) => {
            return (
              <button
                key={index}
                className='relative flex items-center justify-between text-xl transition-all duration-300 text-white/70 gap-x-4 hover:text-white group'
                onClick={() => changeLocale(item.lang)}>
                {item.name}
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={40}
                  height={40}
                  className='object-cover rounded-full w-[40px] h-[40px] opacity-80 transition-all duration-300 group-hover:opacity-100'
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

function ChevronDown(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      {...props}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
      />
    </svg>
  );
}

export default ChangeLanguage;
