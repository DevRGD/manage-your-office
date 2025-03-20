'use client';
import Link from 'next/link';
import localFont from 'next/font/local';
import { useSelector } from 'react-redux';
const Playfair = localFont({ src: '../fonts/Playfair.ttf' });
const PlayfairItalic = localFont({ src: '../fonts/Playfair-Italic.ttf' });

export default function Page() {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div
      className={`flex-grow flex flex-col justify-center items-center min-w-full min-h-full px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 transition-colors duration-300 ${
        isDark ? 'bg-gray-950' : 'bg-gray-300'
      }`}
    >
      <div
        className={`w-full max-w-md text-center p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 backdrop-blur-md rounded-sm border shadow-2xl transition-colors duration-300 shadow-blue-800 ${
          isDark ? 'bg-gray-900 border-blue-500 text-slate-200' : 'bg-gray-200 border-blue-300 text-slate-800'
        }`}
      >
        <h1 className={`text-3xl sm:text-4xl font-bold ${Playfair.className}`}>Create an Account</h1>
        <form className="mt-8 flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className={`px-4 py-2 rounded-sm border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
              isDark ? 'bg-gray-700 text-slate-200 border-blue-400' : 'bg-gray-200 text-slate-800 border-blue-300'
            }`}
          />
          <input
            type="password"
            placeholder="Password"
            className={`px-4 py-2 rounded-sm border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
              isDark ? 'bg-gray-700 text-slate-200 border-blue-400' : 'bg-gray-200 text-slate-800 border-blue-300'
            }`}
          />
          <button className="px-5 py-2 rounded-sm text-lg font-semibold shadow-md bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-400 hover:to-teal-400 transition-transform transform duration-300">
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-sm">
          Already have an account?{' '}
          <Link href="/login" className={`text-blue-400 hover:text-blue-300 transition-colors ${PlayfairItalic.className}`}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
