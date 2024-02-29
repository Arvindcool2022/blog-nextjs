import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function Page({ params }) {
  console.log(params);

  if (params.id > 10) {
    notFound();
  }

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
        <h1 className="text-[64px]">Lorem ipsum dolor amet - {params.id}</h1>
        <div className="flex gap-5">
          <div className="mx-auto flex flex-col gap-2.5 md:mx-0">
            <span className="font-bold text-gray-400">Published</span>
            <span className="font-medium">23 nov 2023</span>
          </div>
        </div>
        <div className="text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          dolorem distinctio voluptatem asperiores maxime eos labore at. Eos
          molestias vero nihil fugiat officia asperiores earum odit repudiandae,
          amet, ut ex. Consequatur totam laborum harum eveniet qui aut
          architecto, at quo facilis sapiente voluptatum, inventore quidem iusto
          rerum aliquam illum, optio eaque voluptatem? Ab facere molestiae ut
          eius. Cum fuga recusandae adipisci, numquam praesentium odit similique
          eveniet, minima ipsum deserunt velit esse tenetur. Enim, unde,
          repellat dicta et officiis omnis vero voluptatibus dignissimos,
          incidunt perferendis inventore saepe minima hic libero? Iste, labore
          architecto porro cumque molestias laborum aliquam alias magnam
          provident?
        </div>
      </div>
    </div>
  );
}
