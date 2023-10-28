'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CentralizedExchanges = () => {
  return (
    <div className='container flex items-center justify-center p-20 '>
      <div className='flex text-black bg-white rounded p-14 gap-x-6'>
        <div className='flex flex-col w-1/2 gap-y-6'>
          <div>
            <p className='text-[#a2b238] text-xl font-semibold'>
              When DEFI is not your thing
            </p>
            <h2 className='text-2xl font-semibold'>
              Volt can be traded on <span className='text-[#a2b238]'>82</span>{' '}
              Centralized Exchanges
            </h2>
          </div>

          <div>
            <p className='text-xl'>
              Although we are big supporters of{' '}
              <strong>decentralization</strong>, CEXs have always been a
              priority for us! They allow for greater accessibility, exposure
              and liquidity which makes them a key to project longevity.
            </p>
          </div>

          <div className='flex'>
            <Link
              href='https://docs.google.com/spreadsheets/d/1GfQitzFrxXEBRYExZWphB7yHG67eqmruSzXz752W1fo/edit#gid=0'
              target='_blank'
              className='relative px-4 py-3 bg-transparent cursor-pointer  rounded text-[#1b2d25] font-semibold hover:scale-105 transition-all duration-300 border-[#1b2d25] border'>
              View CEX's
            </Link>
          </div>
        </div>

        {/* exchanges image */}
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 3 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='w-1/2'>
          <Image
            src='/img/exchanges.png'
            alt='exchanges logos'
            width={1050}
            height={800}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CentralizedExchanges;