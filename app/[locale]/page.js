import { getCurrentLocale, getScopedI18n, getI18n } from '../../locales/server';
import ChangeLanguage from '@/components/ChangeLanguage';

export default async function Home() {
  const t = await getI18n();
  const locale = getCurrentLocale();

  return (
    <main className="min-h-screen overflow-hidden bg-black">
      <div className='flex items-center justify-center w-full h-screen'>
        {/* <ChangeLanguage /> */}
      </div>
    </main>
  );
}
