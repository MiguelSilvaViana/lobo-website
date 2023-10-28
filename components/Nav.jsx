'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useI18n } from '../locales/client';

const ButtonNeon = ({ text, href }) => {
  return (
    <div className='relative z-[9999] neon rounded'>
      <Link
        className='relative'
        href={href}
        target='_blank'
        className='text-base'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {text}
      </Link>
    </div>
  );
};

const Nav = () => {
  const t = useI18n();

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className='relative flex items-center justify-center font-semibold text-white gap-x-10'>
      <ul className='flex items-center justify-center text-base text-white bg-transparent 2xl:text-lg gap-x-8 2xl:gap-x-10'>
        <li className='relative'>
          <Link
            href='#home'
            className={`nav-item ${
              activeSection === 'home' ? 'nav-item-active' : ''
            }`}>
            {t('Home')}
          </Link>
        </li>
        <li className='relative'>
          <Link
            href='#tokenomics'
            className={`nav-item ${
              activeSection === 'tokenomics' ? 'nav-item-active' : ''
            }`}>
            {t('Tokenomics')}
          </Link>
        </li>
        <li className='relative'>
          <Link
            href='#roadmap'
            className={`nav-item ${
              activeSection === 'roadmap' ? 'nav-item-active' : ''
            }`}>
            {t('Roadmap')}
          </Link>
        </li>
        <li className='relative'>
          <Link
            href='#news'
            className={`nav-item ${
              activeSection === 'news' ? 'nav-item-active' : ''
            }`}>
            {t('News')}
          </Link>
        </li>
        <li className='relative'>
          <Link
            href='#vdsc'
            className={`nav-item ${
              activeSection === 'vdsc' ? 'nav-item-active' : ''
            }`}>
            {t('Vdsc')}
          </Link>
        </li>
        <li className='relative'>
          <Link
            href='https://voltinu.in/voltinu_dashboard/index.html'
            className='nav-item'
            target='_blank'>
            {t('Dashboard')}
          </Link>
        </li>
        <li className='relative'>
          <ButtonNeon text='VoltiCard' href={'https://volticard.net/'} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
