import { cn } from '@/lib/utils';
import Link from 'next/link';

const H1 = ({ children, className, as, ...props }) => {
  const Tag = as === 'link' ? Link : 'h1';
  return (
    <Tag
      className={cn('my-4 text-7xl font-semibold  text-red-600', className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default H1;
