import React from 'react';
import CreditCard3d from './CreditCard3d';
import Link from 'next/link';
import { BsFillCreditCard2BackFill } from 'react-icons/bs';
import { getI18n } from '../locales/server';

const VoltiCard = async () => {
  const t = await getI18n();

  return (
    <div className='relative flex items-center justify-center min-w-full min-h-full px-10 py-10 overflow-hidden text-black sm:px-24 lg:px-32 xl:py-36'>
      <div className='picture'>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className='container z-10 flex flex-col items-center justify-center xl:px-10 lg:flex-row gap-x-10'>
        <div className='flex flex-col w-full xl:w-1/2 gap-y-5'>
          <div>
            <p className='text-[#a2b238] text-xl'>{t('Pay with Crypto')}</p>
            <h2 className='text-3xl font-medium xl:text-6xl'>VoltiCard</h2>
            <hr className='h-1 bg-[#c5d845] max-w-[5rem] ml-2' />
          </div>

          <div>
            <p>
              {t(
                'A physical / virtual Debit Card that allows users to seamlessly spend cryptocurrencies for everyday purchases.',
              )}
            </p>
          </div>

          <ul className='relative flex flex-col gap-y-4'>
            <li className='flex items-center gap-x-1 xl:gap-x-2'>
              <input
                type='checkbox'
                checked={true}
                readOnly
                className='accent-[#a2b238] min-w-[22px] min-h-[22px] items-center'
              />
              <label className='pl-0.5 xl:pl-2 text-xs lg:text-base xl:text-xl'>
                {t('The {powerOfDefi} at your fingertips', {
                  powerOfDefi: <strong>{t('powerOfDefi')}</strong>,
                })}
              </label>
            </li>
            <li className='flex items-start gap-x-1 xl:gap-x-2'>
              <input
                type='checkbox'
                checked={true}
                readOnly
                className='accent-[#a2b238] min-w-[22px] min-h-[22px] justify-start items-start '
              />
              <label className='pl-0.5 xl:pl-2 text-xs lg:text-base xl:text-xl'>
                {t(
                  'Send up to {sixCryptos} from your wallet directly to your physical or virtual card. {onLaunchs}',
                  {
                    sixCryptos: <strong>{t('sixCryptos')}</strong>,
                    onLaunchs: (
                      <span className='text-sm opacity-50'>
                        {t('onLaunchs')}
                      </span>
                    ),
                  },
                )}
              </label>
            </li>
            <li className='flex items-center gap-x-1 xl:gap-x-2'>
              <input
                type='checkbox'
                checked={true}
                readOnly
                className='accent-[#a2b238] min-w-[22px] min-h-[22px] justify-center items-center '
              />
              <label className='pl-0.5 xl:pl-2 text-xs lg:text-base xl:text-xl'>
                {t('Powered by {visa}, so accepted worldwide', {
                  visa: <strong>{t('visa')}</strong>,
                })}
              </label>
            </li>
          </ul>

          <div className='flex'>
            <Link
              href='https://volticard.net/'
              target='_blank'
              className='flex items-center justify-center px-4 py-3 bg-[#dcf14f] cursor-pointer gap-x-2 rounded text-black font-semibold hover:scale-105 transition-all duration-300 lg:text-base text-sm'>
              <BsFillCreditCard2BackFill />
              {t('REQUEST VOLTICARD')}
            </Link>
          </div>
        </div>

        <CreditCard3d />
      </div>
    </div>
  );
};

export default VoltiCard;
