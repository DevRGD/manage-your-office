'use client';
import { useSelector } from 'react-redux';
import { Playfair } from '@/utils/fonts';

export default function Page() {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div
      className={`flex-grow flex flex-col justify-center items-center transition-colors duration-300 h-full ${
        isDark ? 'bg-gray-950 text-slate-200' : 'bg-gray-100 text-gray-800'
      }`}
    >
      <h1 className={`text-4xl sm:text-5xl font-bold mb-6 ${Playfair.className}`}>Our Blog</h1>
      <p className="text-lg sm:text-xl text-center max-w-3xl mb-10">Stay updated with our latest insights.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {['How to Increase Productivity', 'Best Collaboration Tools', 'The Future of Remote Work'].map((post, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg transition duration-300 ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-300'
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">{post}</h3>
            <p className="text-sm">Discover useful insights and tips in this article.</p>
            <button className="mt-3 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
