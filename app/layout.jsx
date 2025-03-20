'use client';
import Header from '@/components/Header';
import './globals.css';
import localFont from 'next/font/local';
import Footer from '@/components/Footer';
import { Provider } from 'react-redux';
import store from '@/store/store';

const GreatVibes = localFont({ src: '/fonts/GreatVibes-Regular.ttf' });
const PlayfairItalic = localFont({ src: '/fonts/Playfair-Italic.ttf' });
const Playfair = localFont({ src: '/fonts/Playfair.ttf' });

// export const metadata = {
//   title: '',
//   description: '',
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <Provider store={store}>
        <body className={`h-full flex flex-col ${Playfair.className} ${GreatVibes.className} ${PlayfairItalic.className}`}>
          <Header />
          <main className="flex-grow flex w-full h-full">
            <div className="flex-grow flex justify-center items-center w-full h-full">{children}</div>
          </main>
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
