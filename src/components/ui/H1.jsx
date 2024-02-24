import { cn } from '@/lib/utils';
import React from 'react';

const H1 = ({ children, className }) => {
  return (
    <h1 className={cn('text-7xl text-red-600 font-semibold  my-4', className)}>
      {children}
    </h1>
  );
};

export default H1;
