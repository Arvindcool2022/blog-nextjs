'use client';
import { useState } from 'react';
import NavLinks from './NavLinks';
import H1 from './ui/H1';
import { BiMenu, BiX } from 'react-icons/bi';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <header className=" py-4 text-gray-300">
      <div className="container relative mx-auto flex items-center justify-between px-4 text-center">
        {/* <H1 as="link" href="/" className="m-0 text-3xl text-white">
          Code Chronicle
        </H1> */}
        <Link href="/" className="relative inline-block h-14 w-64">
          <Image src="/logo.jpeg" fill alt="logo" />
        </Link>
        <button className="sm:hidden" onClick={() => setIsopen(p => !p)}>
          {isOpen ? <BiX size="2em" /> : <BiMenu size="2em" />}
        </button>
        <div
          className={cn(
            'absolute left-0 right-0 top-full my-4 origin-top scale-y-0 overflow-hidden bg-[#0c0c22] text-opacity-0 transition-all sm:hidden',
            isOpen && 'scale-y-100 text-opacity-100'
          )}
        >
          <NavLinks active="text-white underline underline-offset-2" />
        </div>
        <div className=" hidden items-center gap-4 sm:flex">
          <NavLinks active="text-white underline underline-offset-2" />
        </div>
      </div>
    </header>
  );
};

export default Header;
