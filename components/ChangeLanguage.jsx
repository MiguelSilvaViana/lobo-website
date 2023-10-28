'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Cookies from 'js-cookie';
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
  const [isOpen, setIsOpen] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState({
    name: 'English',
    src: '/img/flagEua.png',
    alt: 'flag eua',
    lang: 'de',
  });

  const handleLanguageChange = (item) => {
    changeLocale(item.lang);
    setSelectedLanguage(item);
  };

  useEffect(() => {
    const cookieLang = Cookies.get('Next-Locale');

    if (cookieLang) {
      const selectedLanguage = languageOptions.find(
        (language) => language.lang === cookieLang,
      );

      if (selectedLanguage) {
        setSelectedLanguage(selectedLanguage);
      }
    }

    // console.log(selectedLanguage);
  }, []);

  return (
    <div className='flex flex-col min-w-[180px] items-center relative py-2  rounded'>
      <button
        className='flex items-center text-base text-white rounded gap-x-4'
        onClick={() => setIsOpen(!isOpen)}>
        {selectedLanguage.name}
        <div className='flex items-center gap-x-2'>
          <Image
            src={selectedLanguage.src}
            alt={selectedLanguage.alt}
            width={40}
            height={40}
            className='object-cover rounded-full w-[38px] h-[38px]'
            priority={true}
          />
          {!isOpen ? (
            <ChevronDown className='w-5 h-5 text-gray-200' />
          ) : (
            <ChevronUp className='w-5 h-5 text-gray-200' />
          )}
        </div>
      </button>

      {isOpen && (
        <div className='flex flex-col bg-[#0f1411] rounded px-4 py-2 gap-y-6 absolute top-20 min-w-[210px] 2xl:w-[240px]'>
          {languageOptions.map((item, index) => {
            return (
              <button
                key={index}
                className='relative flex items-center justify-between text-base transition-all duration-300 2xl:text-lg text-white/70 gap-x-2 2xl:gap-x-4 hover:text-white group'
                onClick={() => handleLanguageChange(item)}>
                {item.name}
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={40}
                  height={40}
                  className='object-cover rounded-full w-[36px] h-[36px] 2xl:w-[40px] 2xl:h-[40px] opacity-80 transition-all duration-300 group-hover:opacity-100'
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

const ChevronDown = (props) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
      />
    </svg>
  );
};

const ChevronUp = (props) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M4.5 15.75l7.5-7.5 7.5 7.5'
      />
    </svg>
  );
};

export default ChangeLanguage;
