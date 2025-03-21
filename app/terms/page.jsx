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
      <h1 className={`text-4xl sm:text-5xl font-bold mb-6 ${Playfair.className}`}>Terms of Service</h1>
      <div className="max-w-3xl space-y-6 text-sm">
        <h2 className="text-lg font-semibold">Introduction</h2>
        <p>These terms govern the use of our platform and services.</p>
        <h2 className="text-lg font-semibold">User Responsibilities</h2>
        <p>Users must comply with our policies and use the platform ethically.</p>
        <h2 className="text-lg font-semibold">Changes to Terms</h2>
        <p>We may update these terms at any time, and continued use indicates acceptance.</p>
      </div>
    </div>
  );
}
