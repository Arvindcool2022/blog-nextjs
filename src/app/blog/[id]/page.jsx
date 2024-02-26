
import H1 from '@/components/ui/H1';
import Link from 'next/link';

export default function Page({ params }) {
  console.log(params);

  return (
    <div className="container border">
      <H1 className="text-blue-950">Posts - {params.id}</H1>
      {params.id > 1 && (
        <Link className="p-4 text-blue-600" href={`/blog/${+params.id - 1}`}>
          Previous Post
        </Link>
      )}
      <Link className="p-4 text-blue-600" href={`/blog/${+params.id + 1}`}>
        Next Post
      </Link>
    </div>
  );
}
