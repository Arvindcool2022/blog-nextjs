import H1 from '@/components/ui/H1';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="container mx-auto flex flex-col text-center md:px-4 lg:flex-row lg:px-20 lg:text-left">
      <div className=" flex flex-1 flex-col gap-12">
        <H1 className="text-6xl font-extrabold text-gray-500 md:text-8xl">
          Creative Thoughts Agency.
        </H1>
        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className="flex justify-center gap-5 lg:justify-normal">
          <button className="min-w-32 cursor-pointer rounded-lg  border border-gray-500 px-5 py-3 text-gray-500 transition hover:bg-gray-900">
            Learn More
          </button>
          <button className="min-w-32 cursor-pointer rounded-lg bg-gray-500 px-5 py-3 text-[#0c0c22] transition hover:bg-gray-300">
            Contact
          </button>
        </div>

        <div className="relative h-14 w-full  ps-6 grayscale">
          {/* needs fixing */}
          <Image
            src="/brands.png"
            alt=""
            width={480}
            height={56}
            className="mx-auto"
          />
        </div>
      </div>
      <div className="relative flex-1 ">
        {/* needs fixing */}
        <Image src="/hero.gif" alt="hero" priority fill />
      </div>
    </section>
  );
}
