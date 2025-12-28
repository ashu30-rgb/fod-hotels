'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "@fod/assets/logo.png"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const currentRoute = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <Image src={Logo} alt='FOD Logo' height={50} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 font-medium text-lg ">
            <Link href="/" className={`hover:text-fodOrange transition ${currentRoute==="/" && "font-bold text-fodOrange"}`}>Home</Link>
            <Link href="/explore" className={`hover:text-fodOrange transition ${currentRoute==="/explore" && "!font-bold text-fodOrange"}`}>Explore</Link>
            <Link href="/about" className={`hover:text-fodOrange transition ${currentRoute==="/about" && "font-bold text-fodOrange"}`}>About</Link>
            {/* <Link href="/blog" className={`hover:text-fodOrange transition ${currentRoute==="/blog" && "font-bold text-fodOrange"}`}>Blogs</Link> */}
            <Link href="/faq" className={`hover:text-fodOrange transition ${currentRoute==="/faq" && "font-bold text-fodOrange"}`}>FAQ&apos;s</Link>
            <Link href="/contact" className={`hover:text-fodOrange transition ${currentRoute==="/contact" && "font-bold text-fodOrange"}`}>Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown with animation */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <nav className="flex flex-col items-center py-4 space-y-4 font-medium text-gray-700">
          <Link href="/" className={`hover:text-fodOrange transition ${currentRoute==="/" && "font-bold text-fodOrange"}`}>Home</Link>
          <Link href="/explore" className={`hover:text-fodOrange transition ${currentRoute==="/explore" && "font-bold text-fodOrange"}`}>Explore</Link>
          <Link href="/about" className={`hover:text-fodOrange transition ${currentRoute==="/about" && "font-bold text-fodOrange"}`}>About</Link>
          {/* <Link href="/blog" className={`hover:text-fodOrange transition ${currentRoute==="/blog" && "font-bold text-fodOrange"}`}>Blogs</Link> */}
          <Link href="/faq" className={`hover:text-fodOrange transition ${currentRoute==="/faq" && "font-bold text-fodOrange"}`}>FAQ&apos;s</Link>
          <Link href="/contact" className={`hover:text-fodOrange transition ${currentRoute==="/contact" && "font-bold text-fodOrange"}`}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
