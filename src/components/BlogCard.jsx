import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ data }) => {
  const img = Math.random() < 0.5 ? '/code1.jpg' : '/code2.jpg';
  return (
    <div className="pe-2">
      <div className="relative aspect-square w-full">
        <Image src={img} alt="xyz" className="object-cover" fill />
        <pre
          className="absolute left-full top-1/2 -translate-x-[40%] -translate-y-1/2
  rotate-[270deg] text-sm text-gray-600"
        >
          {data.date}
        </pre>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <h3 className="text-lg font-semibold">{data.title}</h3>
        <p className="text-sm text-gray-600">{data.desc_highlight}</p>
        <Link
          href={`/blog/${data.id}`}
          className="my-3 text-sm underline underline-offset-2"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
