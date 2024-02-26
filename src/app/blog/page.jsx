import H1 from '@/components/ui/H1';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="container border">
      <H1>Blog Posts</H1>
      <div className="py-5">
        {[1, 2, 3, 4, 5].map(id => (
          <Link
            key={id}
            className="inline-block p-4 capitalize text-blue-600"
            href={`/blog/${id}`}
          >
            post {id}
          </Link>
        ))}
      </div>
    </div>
  );
}
