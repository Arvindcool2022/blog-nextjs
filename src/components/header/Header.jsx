import NavLinks from './NavLinks';
import { auth } from '@/lib/auth';
import Link from 'next/link';
import Image from 'next/image';
const Header = async () => {
  const session = await auth();

  return (
    <header className=" py-4 text-gray-300">
      <div className="container relative mx-auto flex items-center justify-between px-4 text-center">
        <Link href="/" className="relative inline-block h-14 w-64">
          <Image src="/logo.jpeg" fill alt="logo" />
        </Link>

        <NavLinks session={session} />
      </div>
    </header>
  );
};

export default Header;
