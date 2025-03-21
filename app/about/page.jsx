'use client';
import { useSelector } from 'react-redux';
import { Playfair } from '@/utils/fonts';

export default function Page() {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div
      className={`flex-grow flex flex-col justify-center items-center transition-colors duration-300 h-full ${
        isDark ? 'bg-gray-950 text-slate-200' : 'bg-gray-300 text-gray-800'
      }`}
    >
      <h1 className={`text-4xl sm:text-5xl font-bold mb-6 ${Playfair.className}`}>About Our Company</h1>
      <p className="text-lg sm:text-xl text-center max-w-3xl mb-10">
        Our mission is to help businesses and professionals streamline their work effortlessly.
      </p>
      <div className="flex flex-col sm:flex-row gap-8 max-w-5xl">
        <div
          className={`p-6 rounded-sm shadow-lg transition duration-300 ${
            isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-200 border border-gray-300'
          }`}
        >
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-sm">Empowering teams worldwide with cutting-edge tools to boost productivity.</p>
        </div>
        <div
          className={`p-6 rounded-sm shadow-lg transition duration-300 ${
            isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-200 border border-gray-300'
          }`}
        >
          <h3 className="text-xl font-semibold mb-2">Our Values</h3>
          <p className="text-sm">Innovation, collaboration, transparency, and user-centric solutions.</p>
        </div>
      </div>
    </div>
  );
}
