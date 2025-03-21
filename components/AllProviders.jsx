'use client';
import store from '@/store/store';
import { Provider } from 'react-redux';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GreatVibes, PlayfairItalic, Playfair } from '@/utils/fonts';

export default function AllProviders({ children }) {
  return (
    <Provider store={store}>
      <body className={`h-full flex flex-col ${Playfair.className} ${GreatVibes.className} ${PlayfairItalic.className}`}>
        <Header />
        <main className="flex-grow flex w-full h-full">
          <div className="flex-grow flex justify-center items-center w-full h-full">{children}</div>
        </main>
        <Footer />
      </body>
    </Provider>
  );
}
