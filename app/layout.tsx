'use client';

import MainHeader from '@/Components/MainHeader';
import './globals.css';
import { Manrope } from 'next/font/google';
import Footer from '@/Components/Footer';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

const manrope = Manrope({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={manrope.className}>
        <Provider store={store}>
          <MainHeader />
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
