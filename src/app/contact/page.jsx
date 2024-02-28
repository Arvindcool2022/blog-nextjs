import Image from 'next/image';

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
      <div className=" flex flex-1 flex-col gap-6 *:rounded  *:px-4 *:py-2 *:outline-none">
        <input
          placeholder="Name and Surname"
          className="bg-gray-700"
          type="text"
          name=""
          id=""
        />
        <input
          placeholder="Email ID"
          className="bg-gray-700"
          type="email"
          name=""
          id=""
        />
        <input
          placeholder="Phone Number"
          className="bg-gray-700"
          type="number"
          name=""
          id=""
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          className="bg-gray-700"
        ></textarea>
        <button className="bg-blue-600">send</button>
      </div>
    </section>
  );
}
