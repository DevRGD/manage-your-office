'use client';
import { useSelector } from 'react-redux';
import { PlayfairItalic, Playfair } from '@/utils/fonts';

export default function Page() {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div
      className={`flex-grow flex flex-col justify-center items-center px-6 sm:px-12 py-12 transition-colors duration-300 h-full ${
        isDark ? 'bg-gray-950 text-slate-200' : 'bg-gray-100 text-gray-800'
      }`}
    >
      <h1 className={`text-4xl sm:text-5xl font-bold mb-6 ${Playfair.className}`}>Powerful Features for Seamless Workflows</h1>
      <p className={`text-lg sm:text-xl text-center max-w-3xl mb-10 ${PlayfairItalic.className}`}>
        Designed to enhance productivity, improve collaboration, and make work effortless.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {[
          { title: 'Task Management', description: 'Organize tasks efficiently with a structured approach.' },
          { title: 'Time Tracking', description: 'Monitor work hours with detailed reports.' },
          { title: 'Collaboration', description: 'Team up in real time, no matter where you are.' },
          { title: 'Cloud Storage', description: 'Access your files anytime, anywhere.' },
          { title: 'Custom Workflows', description: 'Automate repetitive tasks effortlessly.' },
          { title: 'Security & Privacy', description: 'Top-notch security to keep your data safe.' },
        ].map((feature, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg transition duration-300 ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-300'
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
