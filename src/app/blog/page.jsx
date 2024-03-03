import BlogCard from '@/components/BlogCard';
import H1 from '@/components/ui/H1';
import { getPosts } from '@/lib/data';

export default async function Page() {
  const codingArticles = await getPosts();
  console.log(codingArticles);
  return (
    <section className="container overflow-hidden lg:px-4">
      <H1 className="mb-6 text-gray-400">Articles</H1>
      <div className="grid grid-cols-1 justify-center justify-items-center gap-10 md:grid-cols-3 lg:grid-cols-4">
        {codingArticles &&
          codingArticles.map(data => <BlogCard key={data.date} data={data} />)}
      </div>
    </section>
  );
}
