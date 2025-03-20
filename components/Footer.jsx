import { useSelector } from 'react-redux';

export default function Footer() {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <footer
      className={`w-full py-3 text-center transition-colors duration-300 ${
        isDark ? 'bg-gray-950 text-slate-400' : 'bg-gray-300 text-slate-700'
      }`}
    >
      <p className="text-balance sm:text-xs md:text-sm lg:text-base">&copy; {new Date().getFullYear()} MYO. All rights reserved.</p>
    </footer>
  );
}
