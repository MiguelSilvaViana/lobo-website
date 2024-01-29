import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
/* components */
import ChangeLanguage from './ChangeLanguage';
import Nav from './Nav';
/* translate */
import { getI18n } from '../locales/server';
/* icons */
import { AiOutlineMenu } from 'react-icons/ai';

const Header = async () => {
  const t = await getI18n();

  return (
    <>
      <header className='fixed w-screen  py-3 bg-[rgb(20,33,27)]  xl:opacity-90 mx-auto flex items-center justify-center px-2 sm:px-6 xl:px-10 2xl:px-20 z-50 max-h-[90px]'>
        <div className='relative flex items-center justify-between min-w-full 2xl:gap-x-6 gap-x-4 '>
          {/* logo */}
          <Link
            href='/'
            className='h-[3rem] relative flex items-center'
          >
            <Image
              src='/img/logo.png'
              alt='logo'
              width={537}
              height={167}
              className='xl:max-w-[160px] xl:max-h-[100px] -mt-1 sm:max-w-[140px] sm:max-h-[100px] max-h-[100px] max-w-[120px]'
              priority={true}
            />
          </Link>

          {/* navigation */}
          <Nav />

          {/* change Language */}
          <ChangeLanguage />
        </div>
      </header>
    </>
  );
};

export default Header;
