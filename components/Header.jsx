'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';
import { toggleTheme } from '@/store/store';
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
      <Link href="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image
          src="/icons/logo.png"
          alt="MYO"
          width={30}
          height={30}
          priority
          className={`rounded-sm p-1 ${isDark ? 'bg-blue-100' : 'bg-blue-200'}`}
        />
        MYO
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-sm sm:text-base font-semibold">
        <Link
          href="/"
          className={`relative transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full ${
            isDark ? 'after:bg-slate-200' : 'after:bg-slate-800'
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`relative transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full ${
            isDark ? 'after:bg-slate-200' : 'after:bg-slate-800'
          }`}
        >
          About
        </Link>
        <Link
          href="/blog"
          className={`relative transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full ${
            isDark ? 'after:bg-slate-200' : 'after:bg-slate-800'
          }`}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className={`relative transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full ${
            isDark ? 'after:bg-slate-200' : 'after:bg-slate-800'
          }`}
        >
          Contact
        </Link>
        <Link
          href="/features"
          className={`relative transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full ${
            isDark ? 'after:bg-slate-200' : 'after:bg-slate-800'
          }`}
        >
          Features
        </Link>
        <Link
          href="/pricing"
          className={`relative transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full ${
            isDark ? 'after:bg-slate-200' : 'after:bg-slate-800'
          }`}
        >
          Pricing
        </Link>
        <Link
          href="/privacy-policy"
          className={`relative transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full ${
            isDark ? 'after:bg-slate-200' : 'after:bg-slate-800'
          }`}
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className={`relative transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full ${
            isDark ? 'after:bg-slate-200' : 'after:bg-slate-800'
          }`}
        >
          Terms
        </Link>

        {/* Theme Toggle Button */}
        <button
          onClick={() => dispatch(toggleTheme())}
          className={`transition duration-500 self-center ${isDark ? 'text-yellow-400 rotate-180' : 'text-slate-400 rotate-0'}`}
        >
          {isDark ? <FiSun size={20} /> : <FaMoon size={20} />}
        </button>
      </nav>

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
          <button
            onClick={() => dispatch(toggleTheme())}
            className={`transition duration-500 self-center ${isDark ? 'text-yellow-400 rotate-180' : 'text-slate-400 rotate-0'}`}
          >
            {isDark ? <FiSun size={20} /> : <FaMoon size={20} />}
          </button>
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
