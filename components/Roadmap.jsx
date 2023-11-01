import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { getI18n } from '../locales/server';
const Roadmap = async () => {
  const t = await getI18n();
  const stages = [
    {
      stage: [{ title: 'Stage One' }, { actualStage: false }],
      content: [
        { text: 'Telegram launch', isDimmed: false },
        { text: 'Twitter launch', isDimmed: false },
        { text: 'Website development', isDimmed: false },
        { text: 'Contract deployment', isDimmed: false },
        { text: 'Stealth and fair launch', isDimmed: false },
        { text: 'CoinGecko listing', isDimmed: false },
        { text: 'CoinGecko listing', isDimmed: false },
        { text: 'CoinMarketCap listing', isDimmed: false },
        { text: '1,000 holders', isDimmed: false },
      ],
    },
    {
      stage: [{ title: 'Stage Two' }, { actualStage: false }],
      content: [
        { text: 'NFTs acquisition', isDimmed: false },
        { text: 'Nodes acquisition', isDimmed: false },
        { text: 'Altcoins trading', isDimmed: false },
        { text: 'First buyback & burn round', isDimmed: false },
        { text: 'Re-brand', isDimmed: false },
        { text: 'Contests & giveways', isDimmed: false },
        { text: 'NFTs Fractionalizations', isDimmed: false },
        { text: 'FEGEX listing', isDimmed: false },
        { text: 'Shibaswap listing', isDimmed: false },
        { text: 'Whitepaper release', isDimmed: false },
      ],
    },
    {
      stage: [{ title: 'Stage Three' }, { actualStage: false }],
      content: [
        { text: 'Smart contract audit', isDimmed: false },
        { text: 'BSC bridge', isDimmed: false },
        { text: 'CEX listings', isDimmed: false },
        { text: 'Treasury staking & farming', isDimmed: false },
        { text: 'Global marketing campaigns', isDimmed: false },
        { text: 'Billboards & press releases', isDimmed: false },
        { text: 'P2E game release', isDimmed: false },
        { text: 'Volt Merch', isDimmed: false },
        { text: '10,000 holders', isDimmed: false },
      ],
    },
    {
      stage: [{ title: 'Stage Four' }, { actualStage: false }],
      content: [
        { text: 'Dashboard', isDimmed: false },
        { text: 'Automated reward system', isDimmed: true },
        { text: 'Legal opinion', isDimmed: false },
        { text: 'Contract deployment', isDimmed: false },
        { text: 'Migration to V2', isDimmed: false },
        { text: 'Everswap listing', isDimmed: false },
        { text: 'NFT Collection', isDimmed: false },
        { text: 'VOLT-Fiat gateway', isDimmed: false },
        { text: 'VOLTICHANGE', isDimmed: false },
        { text: 'Launchpad/incubator', isDimmed: true },
        { text: '50,000 holders', isDimmed: false },
      ],
    },
    {
      stage: [{ title: 'Stage Five' }, { actualStage: true }],
      content: [
        { text: 'New website', isDimmed: false },
        { text: 'Polygon bridge', isDimmed: false },
        { text: 'First VDSC reward', isDimmed: false },
        { text: 'Bridge on voltichange', isDimmed: true },
        { text: 'Voltichange gamification', isDimmed: true },
        { text: 'VoltiCard', isDimmed: false },
        { text: 'VoltiFlex', isDimmed: true },
        { text: 'VoltiShop', isDimmed: true },
        { text: 'VoltiSoft', isDimmed: true },
        { text: 'VoltiEco', isDimmed: false },
        { text: '3 top 10 CEXs', isDimmed: true },
        { text: 'VDSC battle royale game', isDimmed: true },
        { text: 'VDSC in-game marketplace', isDimmed: true },
        { text: '$1M burn at ATH', isDimmed: true },
        { text: 'Volt-library', isDimmed: true },
        { text: '100 VoltiChange Widgets', isDimmed: false },
        { text: '250,000 holders', isDimmed: true },
        { text: '250,000 Twitter followers', isDimmed: true },
      ],
    },
  ];

  return (
    <>
      <div className='flex flex-col items-center justify-center w-full px-10 py-10 bg-white shadow-2xl shadow-black sm:py-24 xl:py-36 xl:px-0'>
        <div>
          <h2 className='text-4xl'>{t('The Roadmap')}</h2>
        </div>

        {/* Roadmap */}
        <div className='container flex flex-col p-4 mt-10 bg-white rounded shadow-2xl xl:flex-row gap-x-1 shadow-black '>
          {stages.map((item, index) => {
            return (
              <div
                key={index}
                className='flex flex-col flex-1 px-1 py-2 gap-y-6'>
                <div
                  className={` p-3 rounded flex items-center justify-center ${
                    item.stage[1].actualStage
                      ? 'text-black bg-[#c5d845]'
                      : 'text-white bg-[#333f39]'
                  } font-semibold`}>
                  <h3>{t(item.stage[0].title)}</h3>
                </div>

                {item.content.map((contentItem, contentIndex) => (
                  <div
                    key={contentIndex}
                    className={`flex items-center gap-x-2 ${
                      contentItem.isDimmed ? 'opacity-50' : 'text-black'
                    }`}>
                    <AiOutlineCheck className='text-[#a2b238]' />
                    <p>{t(contentItem.text)}</p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Roadmap;

/* colocar as palavras que falta no tradutor */
