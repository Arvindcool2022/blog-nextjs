'use client';
import H1 from '@/components/ui/H1';
import { useRouter } from 'next/navigation';

const Error = () => {
  const router = useRouter();
  return (
    <div>
      <H1>Error</H1>
      <button
        className="mx-4 rounded border px-6 py-2"
        onClick={() => router.push('/')}
      >
        Go home
      </button>
      <button
        className="mx-4 rounded border px-6 py-2"
        onClick={() => router.back()}
      >
        Back
      </button>
    </div>
  );
};

export default Error;
