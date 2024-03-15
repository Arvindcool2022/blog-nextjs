'use client';
import Link from 'next/link';
import Links from './Links';
import { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { cn } from '@/lib/utils';

const routes = [
  { href: '/', name: 'home' },
  { href: '/about', name: 'about' },
  { href: '/contact', name: 'contact' },
  { href: '/blog', name: 'blog' },
  { href: '/fetchtest', name: 'test' }
  // { href: '/forgot_password', name: 'forgot_password' },
  // { href: '/signup', name: 'signup' }
];

//temp
const admin = true;

const NavLinks = ({ session }) => {
  const [isOpen, setIsopen] = useState(false);

  return (
    <>
      <button className="sm:hidden" onClick={() => setIsopen(p => !p)}>
        {isOpen ? <BiX size="2em" /> : <BiMenu size="2em" />}
      </button>
      <div
        className={cn(
          'absolute left-0 right-0 top-full my-4 origin-top scale-y-0 overflow-hidden bg-[#0c0c22] text-opacity-0 transition-all sm:hidden',
          isOpen && 'scale-y-100 text-opacity-100'
        )}
      >
        <LinkLayout session={session} />
      </div>
      <div className=" hidden items-center gap-4 sm:flex">
        <LinkLayout session={session} />
      </div>
    </>
  );
};
// prop drill or repeat ??
function LinkLayout({ session }) {
  return (
    <>
      {routes.map(route => (
        <Links key={route.name + route.href} href={route.href}>
          {route.name}
        </Links>
      ))}
      {session?.user?.isAdmin && (
        <Links key="admin" href="/admin">
          admin
        </Links>
      )}
      {!session ? (
        <Link
          key="login"
          href="/login"
          className="my-2 ms-2 inline-block rounded-md border bg-gray-300 px-4 py-1 capitalize text-gray-800 duration-150 ease-in-out hover:bg-white sm:my-0"
        >
          login
        </Link>
      ) : (
        <Link
          key="login"
          href="/login"
          className="my-2 ms-2 inline-block rounded-md border bg-gray-300 px-4 py-1 capitalize text-gray-800 duration-150 ease-in-out hover:bg-white sm:my-0"
        >
          Profile
        </Link>
      )}
    </>
  );
}

export default NavLinks;
