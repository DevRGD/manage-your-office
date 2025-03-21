'use client';
import { Playfair } from '@/utils/fonts';
import { useSelector } from 'react-redux';

export default function Page() {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div
      className={`flex-grow flex flex-col justify-center items-center px-6 sm:px-12 py-12 transition-colors duration-300 h-full ${
        isDark ? 'bg-gray-950 text-slate-200' : 'bg-gray-100 text-gray-800'
      }`}
    >
      <h1 className={`text-4xl sm:text-5xl font-bold mb-6 ${Playfair.className}`}>Choose the Best Plan for You</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {[
          { plan: 'Basic', price: '$9/mo', features: ['Task Management', 'Time Tracking', 'Basic Reports'] },
          { plan: 'Pro', price: '$19/mo', features: ['Everything in Basic', 'Advanced Reports', 'Collaboration Tools'] },
          { plan: 'Enterprise', price: 'Custom', features: ['Everything in Pro', 'Unlimited Users', '24/7 Support'] },
        ].map((tier, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg transition duration-300 text-center ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-300'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-2">{tier.plan}</h3>
            <p className="text-3xl font-bold mb-4">{tier.price}</p>
            <ul className="text-sm space-y-2">
              {tier.features.map((feature, idx) => (
                <li key={idx}>✅ {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
