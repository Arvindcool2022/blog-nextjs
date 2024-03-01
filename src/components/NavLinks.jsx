'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
const session = true;
const admin = true;
const NavLinks = ({ active, ...props }) => {
  const activePath = usePathname();
  return (
    <>
      {routes.map(route => (
        <Link
          key={route.name + route.href}
          href={route.href}
          className={cn(
            'my-2 block capitalize transition-colors duration-200 hover:text-blue-300 sm:my-0',
            activePath === route.href && active
          )}
          {...props}
        >
          {route.name}
        </Link>
      ))}
      {admin && (
        <Link
          key="admin"
          href="/admin"
          className={cn(
            'my-2 block capitalize transition-colors duration-200 hover:text-blue-300 sm:my-0',
            activePath === '/admin' && active
          )}
          {...props}
        >
          admin
        </Link>
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
          logout
        </Link>
      )}
    </>
  );
};

export default NavLinks;
