import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getI18n } from '../locales/server';

const NftCard = ({ img, className }) => {
  return (
    <>
      <Image
        sizes='100vw'
        width={0}
        height={0}
        alt='nft vdsc image'
        src={img}
        className={`absolute w-[270px] h-[250px] 2xl:w-[300px] 2xl:h-[280px] border-solid border-8  border-gray-300 border-opacity-30 flex-1 object-cover ${className}`}
      />
    </>
  );
};

const Vdsc = async () => {
  const t = await getI18n();
  return (
    <div
      className='flex items-center justify-center w-full h-full bg-no-repeat bg-cover'
      style={{ backgroundImage: 'url(/img/nftbg.png)' }}>
      <div className='container flex items-center justify-center h-full px-6 gap-x-8 xl:px-0 py-36 sm:py-0'>
        {/* content */}
        <div className='p-4 sm:p-6 bg-black rounded bg-opacity-50 xl:max-w-[50%] h-fit w-full relative'>
          {/* logo */}
          <div className='relative'>
            <Image
              src='/img/vdsclogo.png'
              alt='vdsc logo'
              width={0}
              height={0}
              sizes='100vw'
              className={`w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px] absolute lg:-right-[9%] sm:-right-[10%] sm:-top-14 lg:-top-20 hover:animate-spin -right-[14%] -top-14`}
            />
          </div>
          {/* content */}
          <div className='flex flex-col flex-1 gap-y-4'>
            <h2 className='mb-4 text-2xl xl:text-4xl '>
              Volted Dragons Sailors Club
            </h2>

            <p className='tracking-wide'>
              {t(
                'The Volted Dragons Sailors Club (VDSC) is the Volt Inu official collection of 10,000 3D NFT Dragons sailing on the Ethereum Blockchain.',
              )}
            </p>

            <p className='tracking-wide'>
              {t(
                'By holding a Volted Dragon, you will get exclusive access to future collections, to real world events & meetups, to exclusive rights and revenues within the VOLT ecosystem and other perks as a member of the VDSC.',
              )}
            </p>

            <div className='flex flex-col items-center gap-x-4 sm:flex-row xl:gap-y-0 gap-y-4'>
              <Link
                className='px-6 py-3 bg-[#dcf14f] text-black rounded-lg hover:bg-[#1c2922] hover:text-white hover:border-[#dcf14f] hover:border-opacity-100 transition-all duration-200 hover:scale-105 border-opacity-0 font-semibold w-fit'
                href='https://opensea.io/collection/volteddragonssailorsclub '
                target='_blank'>
                {t('VIEW COLLECTION')}
              </Link>

              <Link
                className='px-6 py-3  w-fit rounded-lg bg-transparent hover:bg-[#dcf14f] text-white hover:text-black border-[#dcf14f] border transition-all duration-200 hover:scale-105  font-semibold'
                href='https://volteddragons.com/'
                target='_blank'>
                {t('VIEW WEBSITE')}
              </Link>
            </div>
          </div>
        </div>

        {/* images */}
        <div className='relative hidden w-full h-full xl:flex-col xl:flex-1 xl:flex'>
          {/* dragon 1 */}
          <NftCard img='/img/dragon2.png' className=' -right-[2%] -top-[8%] ' />

          {/* dragon 2 */}
          <NftCard
            img='/img/dragon1.png'
            className='top-[2%] 2xl:top-[4%] left-[4%]'
          />

          {/* dragon 3 */}
          <NftCard
            img='/img/dragon3.png'
            className='top-[40%] 2xl:top-[38%] left-[4%]'
          />

          {/* dragon 4 */}
          <NftCard img='/img/dragon4.png' className='top-[78%] left-[4%]' />

          {/* dragon 5 */}
          <NftCard img='/img/dragon5.png' className='-right-[2%] top-[30%]' />

          {/* dragon 6 */}
          <NftCard img='/img/dragon6.png' className='-right-[2%] top-[70%]' />
        </div>
      </div>
    </div>
  );
};

export default Vdsc;
