import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
/* components */
import ChangeLanguage from './ChangeLanguage';
/* translate */
import { getI18n } from '../locales/server';
/* icons */
import { AiOutlineMenu } from 'react-icons/ai';

const ButtonNeon = ({ text, href }) => {
  return (
    <div className='relative z-[9999] neon rounded'>
      <Link className='relative' href={href} target='_blank'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {text}
      </Link>
    </div>
  );
};

const Header = async () => {
  const t = await getI18n();

  return (
    <>
      <header className='fixed w-full opacity-90 bg-[rgb(20,33,27)] py-3 px-20'>
        <div className='container relative flex items-center justify-between min-w-full gap-x-4'>
          {/* logo */}
          <Link href='/'>
            <Image
              src='/img/logo.png'
              alt='logo'
              width={537}
              height={167}
              className='h-[3rem] max-w-[180px] max-h-[100px]'
            />
          </Link>
          {/* navigation */}
          <nav className='flex items-center text-xl text-white gap-x-10'>
            <ul className='flex text-xl text-white bg-transparent gap-x-10'>
              <li>
                <Link href='#home' className='nav-names'>
                  {t('Home')}
                </Link>
              </li>
              <li>
                <Link href='#tokenomics' className='nav-names'>
                  {t('Tokenomics')}
                </Link>
              </li>
              <li>
                <Link href='#roadmap' className='nav-names'>
                  {t('Roadmap')}
                </Link>
              </li>
              <li>
                <Link href='#news' className='nav-names'>
                  {t('News')}
                </Link>
              </li>
              <li>
                <Link href='#vdsc' className='nav-names'>
                  {t('Vdsc')}
                </Link>
              </li>
              <li>
                <Link href='#dashboard' className='nav-names'>
                  {t('Dashboard')}
                </Link>
              </li>
            </ul>
            <ButtonNeon text='VoltiCard' href={'https://volticard.net/'} />
          </nav>
          {/* change Language */}
          <ChangeLanguage />
        </div>
      </header>
    </>
  );
};

export default Header;
