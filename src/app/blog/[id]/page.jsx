import PostAuthor from '@/components/PostAuthor';
import { getPost } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export const generateMetadata = async ({ params }) => {
  const { title, desc_highlight: description } = await getPost(params.id);

  return { title, description }; // dynamic meta data
};

export default async function Page({ params }) {
  if (params.id > 10) notFound();

  const postData = await getPost(params.id);

  return (
    <div className="flex gap-24 text-center md:text-left lg:p-8">
      <div className="relative hidden h-[calc(100vh_-_200px)] flex-1 md:block">
        <Image
          src={params.id % 2 ? '/code3.jpg' : '/code4.jpg'}
          alt="blog image"
          fill
          className="hidden rounded object-cover md:block"
        />
      </div>
      <div className="flex flex-[2] flex-col gap-12 p-4 md:p-0">
        <h1 className="text-5xl font-semibold leading-none">
          {postData.title}
        </h1>
        <div className="flex gap-5">
          <div className="mx-auto flex flex-col gap-2.5 md:mx-0">
            <span className="font-bold text-gray-400">Author</span>
            <Suspense
              fallback={<span className="font-medium">Loading name...</span>}
            >
              <PostAuthor userId={postData.userId} />
            </Suspense>
          </div>
          <div className="mx-auto flex flex-col gap-2.5 md:mx-0">
            <span className="font-bold text-gray-400">Published</span>
            <span className="font-medium">{postData.date}</span>
          </div>
        </div>
        <div className="text-lg">{postData.body}</div>
      </div>
    </div>
  );
}
