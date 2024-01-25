'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useI18n } from '../locales/client';

const ButtonNeon = ({ text, href }) => {
  return (
    <div className='relative z-[9999] neon rounded border-[#dcf14f] border xl:border-none'>
      <Link
        href={href}
        target='_blank'
        className='relative text-xs 2xl:text-base'
      >
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
  const [openMenu, setOpenMenu] = useState(false);

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
    <nav className='flex items-center justify-center w-full font-semibold text-white gap-x-10'>
      <button
        className={` ${openMenu ? 'toggle active' : 'toggle'}`}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <span></span>
      </button>

      <ul
        className={`items-center   justify-center  text-xs 2xl:text-base text-white  xl:flex gap-x-8 2xl:gap-x-10 ${
          openMenu
            ? 'flex flex-col absolute  top-[60px] w-screen min-full text-center bg-opacity-100  bg-black -left-2 sm:-left-10'
            : 'hidden bg-transparent'
        }`}
      >
        <li className={` ${activeSection === 'home' ? 'active ' : ''}`}>
          <Link
            href='#home'
            className={`nav-item ${activeSection === 'home' ? 'active ' : ''}`}
          >
            {t('Home')}
          </Link>
        </li>
        <li className={` ${activeSection === 'tokenomics' ? 'active' : ''}`}>
          <Link
            href='#tokenomics'
            className={`nav-item ${
              activeSection === 'tokenomics' ? 'active' : ''
            }`}
          >
            {t('Tokenomics')}
          </Link>
        </li>
        <li className={` ${activeSection === 'roadmap' ? 'active' : ''}`}>
          <Link
            href='#roadmap'
            className={`nav-item ${
              activeSection === 'roadmap' ? 'active' : ''
            }`}
          >
            {t('Roadmap')}
          </Link>
        </li>
        <li className={`${activeSection === 'news' ? 'active' : ''}`}>
          <Link
            href='#news'
            className={`nav-item ${activeSection === 'news' ? 'active' : ''}`}
          >
            {t('News')}
          </Link>
        </li>
        <li className={` ${activeSection === 'vdsc' ? 'active' : ''}`}>
          <Link
            href='#vdsc'
            className={`nav-item ${activeSection === 'vdsc' ? 'active' : ''}`}
          >
            {t('Vdsc')}
          </Link>
        </li>
        <li>
          <Link
            href='https://voltinu.in/voltinu_dashboard/index.html'
            className='nav-item'
            target='_blank'
          >
            {t('Dashboard')}
          </Link>
        </li>
        <li>
          <ButtonNeon
            text='VoltiCard'
            href={'https://volticard.net/'}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
