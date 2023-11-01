import { getCurrentLocale, getScopedI18n, getI18n } from '../../locales/server';
/* components */
import {
  Header, Wolf, Tokenomics, Dex, NewsMiddle, VoltiGames, CentralizedExchanges, Roadmap, Partners, NewsSection, Vdsc, Footer
} from '../../components';

export default async function Home() {
  const t = await getI18n();
  const locale = getCurrentLocale();

  return (
    <main className="min-h-screen overflow-hidden bg-black">
      <Header />
      {/* passar um corretivo em todos os textos para ver se todos estao traduzidos */}
      {/* ajeitar a imagem do lobo e as traduçoes dos cards */}
      {/* criar a pagina volti card */}
      <section id='home' className='flex items-center justify-center w-full h-auto text-white '>
        <Wolf />
      </section>

      {/* algumas opçoes nao aparece quando seleciona binance por exemplo ai tem que remover */}
      <section id='tokenomics' className='flex items-center justify-center w-full h-auto text-white  border-t-4 border-[#a2b238]'>
        <Tokenomics />
      </section>

      <section id='dex' className='flex items-center justify-center w-full h-auto text-white xl:h-screen '>
        <Dex />
      </section>

      <section id='newsMiddle' className='flex items-center justify-center w-full h-auto text-white '>
        <NewsMiddle />
      </section>

      <section id='games' className='flex items-center justify-center w-full h-auto text-white xl:h-screen'>
        <VoltiGames />
      </section>

      {/* VOLTI Card */}

      <section id='exchanges' className='flex items-center justify-center w-full h-auto min-h-screen text-white bg-[#1b2d25]' >
        <CentralizedExchanges />
      </section>

      <section id='roadmap' className='flex items-center justify-center w-full h-auto min-h-screen bg-black'>
        <Roadmap />
      </section>

      <section id='partners' className='w-full h-auto min-h-screen text-white bg-no-repeat bg-cover' style={{ backgroundImage: 'url(/img/background30.png)' }}>
        <Partners />
      </section>

      <section id='news' className='flex items-center justify-center w-full h-auto text-black bg-gray-100 '>
        <NewsSection />
      </section>

      <section id='vdsc' className='flex items-center justify-center w-full h-screen overflow-hidden text-white bg-black'>
        <Vdsc />
      </section>

      <Footer />
    </main>
  );
}
