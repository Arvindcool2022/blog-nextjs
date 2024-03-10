import { sample } from '@/lib/action';
import React from 'react';

const page = () => {
  return (
    <div>
      <form action={sample}>
        <button>click</button>
      </form>
    </div>
  );
};

export default page;
