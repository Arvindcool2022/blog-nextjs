'use client';

import useCountUp from '@/hooks/useCountUp';

const Stats = ({ data }) => {
  const count = useCountUp(data.num, 2000);

  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-semibold text-indigo-600">
        {count}
        {data.h1}
      </h1>
      <p>{data.desc}</p>
    </div>
  );
};

export default Stats;
