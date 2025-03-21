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
      <h1 className={`text-4xl sm:text-5xl font-bold mb-6 ${Playfair.className}`}>Get in Touch</h1>
      <p className="text-lg sm:text-xl text-center max-w-3xl mb-10">Have questions? We'd love to hear from you!</p>
      <form
        className={`w-full max-w-lg p-6 rounded-lg shadow-lg transition duration-300 ${
          isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-300'
        }`}
      >
        <label className="block mb-4">
          <span className="text-sm font-semibold">Your Name</span>
          <input type="text" className="w-full p-2 rounded-md mt-1" />
        </label>
        <label className="block mb-4">
          <span className="text-sm font-semibold">Email Address</span>
          <input type="email" className="w-full p-2 rounded-md mt-1" />
        </label>
        <label className="block mb-4">
          <span className="text-sm font-semibold">Message</span>
          <textarea className="w-full p-2 rounded-md mt-1" rows="4"></textarea>
        </label>
        <button className="px-5 py-2 rounded-md font-semibold bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
}
