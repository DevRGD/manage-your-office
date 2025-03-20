'use client';
import { useState } from 'react';
import Link from 'next/link';
import { toggleTheme } from '@/store/store';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';

export default function Header() {
  const isDark = useSelector((state) => state.theme.isDark);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`w-full py-4 px-6 sm:px-12 flex justify-between items-center transition-colors duration-300 z-10 ${
        isDark ? 'bg-gray-950 text-slate-200' : 'bg-gray-300 text-slate-800'
      }`}
    >
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">
        MYO
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-sm sm:text-base font-semibold">
        <Link href="/" className="hover:text-gray-500 transition-colors">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-500 transition-colors">
          About
        </Link>
        <Link href="/contact" className="hover:text-gray-500 transition-colors">
          Contact
        </Link>
      </nav>

      {/* Theme Toggle Button */}
      <button
        onClick={() => dispatch(toggleTheme())}
        className={`p-2 transition duration-500 ${isDark ? 'text-yellow-400 rotate-180' : 'text-slate-400 rotate-0'}`}
      >
        {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>

      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="md:hidden p-2 relative w-8 h-10 z-20" aria-label="Toggle menu">
        <div
          className={`absolute rounded-sm top-1/2 left-0 w-full h-1 transition duration-300 ease-in-out ${
            isDark ? 'bg-slate-200' : 'bg-slate-800'
          } ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}
        ></div>
        <div
          className={`absolute rounded-sm top-1/2 right-0 h-1 transition duration-300 ease-in-out ${
            isDark ? 'bg-slate-200' : 'bg-slate-800'
          } ${isMenuOpen ? '-rotate-45 translate-y-0 w-full' : 'translate-y-1.5 w-3/4'}`}
        ></div>
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-full bg-opacity-95 backdrop-blur-lg shadow-lg transition-transform duration-300 ${
          isDark ? 'bg-gray-900 text-slate-200' : 'bg-gray-200 text-slate-800'
        } ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Sidebar Links */}
        <nav className="flex flex-col items-center gap-10 text-2xl font-semibold mt-24">
          <Link href="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
