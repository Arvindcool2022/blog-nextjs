import Image from 'next/image';
import { sample } from '@/lib/action';

export const metadata = { title: 'Contact' };

export default function Page() {
  return (
    <section className="container mx-auto my-10 flex flex-col gap-24 text-center md:flex-row md:text-left lg:my-20 lg:px-20">
      <div className="relative flex-1">
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className="object-contain"
        />
      </div>
      <form
        className=" flex flex-1 flex-col gap-6 *:rounded  *:px-4 *:py-2 *:outline-none"
        action={sample}
      >
        <input
          placeholder="Name and Surname"
          className="bg-gray-700"
          type="text"
          name="name"
          id=""
        />
        <input
          placeholder="Email ID"
          className="bg-gray-700"
          type="email"
          name="email"
          id=""
        />
        <input
          placeholder="Phone Number"
          className="bg-gray-700"
          type="number"
          name="phone"
          id=""
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          className="bg-gray-700"
        ></textarea>
        <button className="bg-blue-600">send</button>
      </form>
    </section>
  );
}
