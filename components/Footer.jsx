import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DoownloadWhitepaperButton from './DoownloadWhitepaperButton';

/* icons */
import {
  BsTelegram,
  BsTwitter,
  BsFacebook,
  BsMedium,
  BsInstagram,
} from 'react-icons/bs';
import { FaDiscord, FaTiktok } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
  const socialLinks = [
    {
      link: 'https://t.me/VoltInu_Portal',
      icon: <BsTelegram size={56} color='#dcf14f' />,
      text: 'Telegram',
    },
    {
      link: 'https://twitter.com/VoltInuOfficial',
      icon: <BsTwitter size={56} color='#dcf14f' />,
      text: 'Twitter',
    },
    {
      link: 'https://discord.com/invite/mRmg5ZKJv9',
      icon: <FaDiscord size={56} color='#dcf14f' />,
      text: 'Discord',
    },
    {
      link: 'https://www.facebook.com/voltinuofficial/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0',
      icon: <BsFacebook size={56} color='#dcf14f' />,
      text: 'Facebook',
    },
    {
      link: 'https://www.youtube.com/@voltinuofficial',
      icon: <AiFillYoutube size={60} color='#dcf14f' />,
      text: 'Youtube',
    },
    {
      link: 'https://medium.com/@VoltInu',
      icon: <BsMedium size={56} color='#dcf14f' />,
      text: 'Medium',
    },
    {
      link: 'https://www.instagram.com/volt_inu_official/',
      icon: <BsInstagram size={56} color='#dcf14f' />,
      text: 'Instagram',
    },
    {
      link: 'https://www.tiktok.com/@volt_inu',
      icon: <FaTiktok size={56} color='#dcf14f' />,
      text: 'TikTok',
    },
  ];

  const documentsLinks = [
    {
      text: 'Eth Audit Report',
      link: 'https://solidity.finance/audits/VoltInuETH/',
    },
    {
      text: 'Bsc Audit Report',
      link: 'https://solidity.finance/audits/VoltInuBSC/',
    },
    {
      text: 'LinkTree',
      link: 'https://linktr.ee/voltinuofficial',
    },
  ];
  return (
    <footer
      className='py-16 bg-[#0e1612]'
      style={{ boxShadow: 'inset -3px 20px 30px -10px rgba(0,0,0,.3)' }}>
      <div className='flex flex-col items-center justify-center w-full text-white gap-y-10'>
        <div className='relative text-center'>
          <h2 className='text-4xl font-semibold'>Our Socials</h2>
          <p className='text-lg text-gray-300 xl:text-xl'>
            Become a member of <strong>the Voltarmy</strong>...the best
            community in the crypto space
          </p>
        </div>
        {/* Social Links */}
        <div className='flex flex-wrap items-center justify-center w-full gap-6 mb-10'>
          {socialLinks.map((item, index) => {
            return (
              <>
                <div className='flex flex-col items-center justify-center gap-y-2'>
                  {item.icon}
                  <p>{item.text}</p>
                </div>
              </>
            );
          })}
        </div>
        {/* Documents */}
        <div className='relative text-center'>
          <h4 className='text-xl text-center after:content-[""] after:flex after:w-[80%] after:rounded after:h-1 after:bg-[#dcf14f] after:mx-auto after:mt-2'>
            Documents & links
          </h4>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-x-10'>
          <DoownloadWhitepaperButton />
          {documentsLinks.map((item, index) => {
            return (
              <Link
                className='text-sm underline transition-all duration-200 opacity-70 decoration-2 underline-offset-8 xl:text-base hover:opacity-100'
                href={item.link}
                target='_blank'>
                {item.text}
              </Link>
            );
          })}
        </div>

        <div className='flex flex-col items-center justify-center text-center'>
          <Image
            src='/img/logo2.png'
            width={150}
            height={150}
            alt='logo volt inu'
          />
          <div className='opacity-70'>
            <p>Copyright © 2023 Volt Inu. All Rights Reserved.'</p>
            <p>Stay Volted!</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
