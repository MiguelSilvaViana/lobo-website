'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from '../locales/client';
import { motion } from 'framer-motion';

const CardHome = ({ text, img, link, highlighted }) => {
  const t = useI18n();

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className='flex flex-col p-4 sm:p-6 w-[310px] h-[180px] sm:w-[485px] sm:h-[184px] bg-[#0f1411]  justify-center-center rounded items-center'>
      <div className='flex items-center justify-center w-full h-[70%] mb-4 lg:mb-2 gap-x-3 '>
        <Image
          src={img}
          alt={img}
          width={30}
          height={30}
          className='-mt-[16%]'
        />
        <p className='text-xs sm:text-sm'>
          <strong className='text-sm sm:text-base'>{highlighted}</strong> {text}
        </p>
      </div>
      <div className=' ml-16 h-[30%] w-full'>
        <Link
          href={link}
          target='_blank'
          className='flex items-center flex-start text-[#dcf14f] hover:text-white transition-all duration-300'>
          <ChevronRight className='w-4 h-4 cursor-pointer ' />
          More
        </Link>
      </div>
    </motion.div>
  );
};

const ChevronRight = (props) => {
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
        d='M8.25 4.5l7.5 7.5-7.5 7.5'
      />
    </svg>
  );
};

export default CardHome;
