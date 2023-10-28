import { Inter } from 'next/font/google';
import { Provider } from './Provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Volt Inu | P2E Community Driven DeFi Crypto',
  description: 'Volt Inu is an ecosystem offering DeFi products while bringing profits back to the native token to support its deflationary purpose.',
};

export default function RootLayout({ params: { locale }, children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider locale={locale}>
          {children}
        </Provider>
      </body>
    </html>
  );
}


