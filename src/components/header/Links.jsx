import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Links = ({ href, children, ...props }) => {
  const activePath = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        'my-2 block capitalize transition-colors duration-200 hover:text-blue-300 sm:my-0',
        activePath === href && 'text-white underline underline-offset-2'
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Links;
