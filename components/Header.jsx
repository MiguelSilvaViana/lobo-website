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
      <header className='fixed w-full  py-3 bg-[rgb(20,33,27)] opacity-90 mx-auto flex items-center justify-center px-20 z-50'>
        <div className='relative flex items-center justify-between w-full 2xl:gap-x-6 gap-x-4'>
          {/* logo */}
          <Link href='/' className='h-[3rem] relative flex items-center'>
            <Image
              src='/img/logo.png'
              alt='logo'
              width={537}
              height={167}
              className=' max-w-[190px] max-h-[100px] -mt-1'
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
