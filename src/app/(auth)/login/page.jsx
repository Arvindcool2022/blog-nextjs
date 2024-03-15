import H1 from '@/components/ui/H1';
import { handleSignIn, handleSignOut, login } from '@/lib/action';
import { auth } from '@/lib/auth';
import Image from 'next/image';
import Link from 'next/link';

export default async function Page() {
  const session = await auth();
  console.log(session);

  return (
    <>
      {!session?.user ? (
        <div className="container  flex h-[77svh] flex-col items-center justify-center gap-6">
          <form
            action={login}
            className="flex w-full flex-col gap-3 rounded-md border border-gray-600 p-2 *:rounded *:px-4 *:py-2 *:outline-none md:w-2/3 lg:w-1/4"
          >
            <H1 className="my-0 text-center text-2xl text-gray-300">Login</H1>
            <input
              placeholder="Email ID"
              className="bg-gray-700"
              type="text"
              name="email"
              id=""
            />

            <input
              placeholder="Password"
              className="bg-gray-700"
              type="password"
              name="password"
              id=""
            />

            <button className="bg-blue-600 transition hover:bg-blue-800 active:scale-95">
              Login with credentials
            </button>
          </form>
          <hr />
          <Link
            href="/register"
            className="rounded-md bg-gray-500 px-6  py-2 text-2xl uppercase text-[#0c0c22] transition hover:bg-gray-300 active:scale-95"
          >
            Register with email
          </Link>
          <form action={handleSignIn}>
            <button className="rounded-md bg-gray-500 px-6  py-2 text-2xl uppercase text-[#0c0c22] transition hover:bg-gray-300 active:scale-95">
              Login with github
            </button>
          </form>
        </div>
      ) : (
        <section className="container flex h-[77svh] flex-col items-center justify-center gap-4">
          <div className="mb-6 flex items-end gap-4">
            <div>
              <p>Name: {session?.user?.name}</p>
              <p>Email: {session?.user?.email}</p>
            </div>
            {session?.user?.image && (
              <Image
                src={session?.user?.image}
                alt="profile pic"
                width={100}
                height={100}
              />
            )}
          </div>
          <form action={handleSignOut} className=" ">
            <button className="rounded-md bg-gray-500 px-6  py-2 text-2xl uppercase text-[#0c0c22] transition hover:bg-gray-300 active:scale-95">
              Logout
            </button>
          </form>
        </section>
      )}
    </>
  );
}
