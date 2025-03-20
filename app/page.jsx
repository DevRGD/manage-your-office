'use client';
import { useSelector } from 'react-redux';
import localFont from 'next/font/local';
import Link from 'next/link';

const GreatVibes = localFont({ src: '/fonts/GreatVibes-Regular.ttf' });
const PlayfairItalic = localFont({ src: '/fonts/Playfair-Italic.ttf' });
const Playfair = localFont({ src: '/fonts/Playfair.ttf' });

export default function Page() {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div
      className={`flex-grow flex flex-col justify-center items-center min-w-full min-h-full transition-colors duration-300 ${
        isDark ? 'bg-gray-950' : 'bg-gray-300'
      }`}
    >
      {/* Content Box */}
      <div
        className={`max-w-[90%] sm:max-w-2xl min-h-[50vh] mx-auto my-6 sm:my-8 md:my-10 lg:my-12 px-6 sm:px-10 md:px-12 lg:px-16 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 text-center backdrop-blur-md rounded-md border shadow-2xl transition-colors duration-300 shadow-blue-800 ${
          isDark ? 'bg-gray-900 border-blue-500 text-slate-200' : 'bg-gray-200 border-blue-300 text-slate-800'
        }`}
      >
        {/* Heading */}
        <h1
          className={`text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold leading-snug transition-colors duration-300 ${Playfair.className}`}
        >
          Effortlessly Manage Your
          <span className={`${PlayfairItalic.className} ${isDark ? 'text-blue-400' : 'text-blue-600'}`}> Office Work</span>
        </h1>

        {/* Description */}
        <p
          className={`text-base sm:text-lg md:text-xl tracking-wide my-10 mx-auto px-4 sm:px-6 md:px-8 leading-relaxed transition-colors duration-300 ${GreatVibes.className}`}
        >
          Stay organized and efficient as an
          <span className={`mx-1 ${PlayfairItalic.className} ${isDark ? 'text-blue-400' : 'text-blue-500'}`}> Employee,</span>
          <span className={`mx-1 ${PlayfairItalic.className} ${isDark ? 'text-green-400' : 'text-green-500'}`}> Manager,</span> or
          <span className={`mx-1 ${PlayfairItalic.className} ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`}> CEO.</span> Sign up today
          and take control of your office workflow.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link
            href="/login"
            className={`px-5 sm:px-6 py-2 rounded-sm text-sm sm:text-base font-semibold shadow-md transition-transform transform duration-300 ${
              isDark
                ? 'bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-400 hover:to-teal-400'
                : 'bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-400 hover:to-sky-400'
            }`}
          >
            Login
          </Link>
          <Link
            href="/signup"
            className={`px-5 sm:px-6 py-2 rounded-sm text-sm sm:text-base font-semibold shadow-md transition-transform transform duration-300 ${
              isDark
                ? 'bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-400 hover:to-indigo-400'
                : 'bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400'
            }`}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
