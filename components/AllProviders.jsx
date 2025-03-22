'use client';
import store from '@/store/store';
import { Provider } from 'react-redux';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AllProviders({ children }) {
  return (
    <Provider store={store}>
      <Header />
      <main className="flex-grow flex w-full h-full">
        <div className="flex-grow flex justify-center items-center w-full h-full">{children}</div>
      </main>
      <Footer />
    </Provider>
  );
}
