import React from 'react';
import Link from 'next/link';

const routes = [
  { href: '/', name: 'Home' },
  { href: '/about', name: 'about' },
  { href: '/blog', name: 'blog' },
  { href: '/contact', name: 'contact' },
  { href: '/admin', name: 'admin' },
  { href: '/login', name: 'login' },
  { href: '/forgot_password', name: 'forgot_password' },
  { href: '/signup', name: 'signup' }
];
const NavLinks = props => {
  return (
    <>
      {routes.map(route => (
        <Link key={route.name + route.href} href={route.href} {...props}>
          {route.name}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
