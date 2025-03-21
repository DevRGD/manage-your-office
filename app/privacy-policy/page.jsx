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
      <h1 className={`text-4xl sm:text-5xl font-bold mb-6 ${Playfair.className}`}>Privacy Policy</h1>
      <div className="max-w-3xl space-y-6 text-sm">
        <p>
          We are committed to protecting your personal information. This privacy policy explains how we collect, use, and safeguard your
          data.
        </p>
        <h2 className="text-lg font-semibold">What Information We Collect</h2>
        <p>We collect user data such as name, email address, and usage analytics to improve our services.</p>
        <h2 className="text-lg font-semibold">How We Use Your Information</h2>
        <p>We use your data to provide better services, personalize content, and communicate updates.</p>
      </div>
    </div>
  );
}
