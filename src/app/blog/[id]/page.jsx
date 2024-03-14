import PostAuthor from '@/components/PostAuthor';
import { getPost } from '@/lib/data';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

async function getData(id) {
  const res = await fetch(`${process.env.HOST}/api/blog/${id}`);
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export const generateMetadata = async ({ params }) => {
  // const postData = await getPost(params.id);
  const postData = await getData(params.id);
  if (!postData) notFound();
  const { title, desc_highlight: description } = postData;
  return { title, description }; // dynamic meta data
};

export default async function Page({ params }) {
  const postData = await getData(params.id);
  // const postData = await getPost(params.id);
  if (!postData) notFound();

  return (
    <div className="flex gap-24 text-center md:text-left lg:p-8">
      <div className="relative hidden h-[calc(100vh_-_200px)] flex-1 md:block">
        <Image
          src={
            postData?.img
              ? postData.img
              : params.id % 2
                ? 'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                : 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
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
            <span className="font-medium">{formatDate(postData.date)}</span>
          </div>
        </div>
        <div className="text-lg">{postData.body}</div>
      </div>
    </div>
  );
}
