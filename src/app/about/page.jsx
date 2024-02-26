import Stats from '@/components/Stats';
import H1 from '@/components/ui/H1';
import Image from 'next/image';

export default function Page() {
  const stats = [
    { num: 10, h1: '+', desc: 'Year of experience' },
    { num: 250, h1: 'K+', desc: 'People Reached' },
    { num: 500, h1: '+', desc: 'Successful Products' }
  ];
  return (
    <div className="container mx-auto my-10 flex flex-col gap-24 text-center md:flex-row md:text-left lg:px-6">
      <div className=" flex flex-1 flex-col gap-12">
        <h2 className="text-indigo-600">About Agency</h2>
        <h1 className="text-5xl">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="text-xl font-light">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className=" flex flex-col items-center justify-between gap-12 md:flex-row">
          {stats.map(stat => {
            console.log(stat);
            return <Stats data={stat} key={stat.num} />;
          })}
        </div>
      </div>
      <div className="relative flex-1">
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
