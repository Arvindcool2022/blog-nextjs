import { handleSignIn, handleSignOut } from '@/lib/action';
import { auth } from '@/lib/auth';
import Image from 'next/image';

export default async function Page() {
  const session = await auth();
  console.log(session);

  return (
    <>
      {!session ? (
        <form
          action={handleSignIn}
          className="container  flex h-[77svh] items-center justify-center"
        >
          <button className="rounded-md bg-gray-500 px-6  py-2 text-2xl uppercase text-[#0c0c22] transition  hover:bg-gray-300 active:scale-95">
            Login with github
          </button>
        </form>
      ) : (
        <section className="container flex h-[77svh] flex-col items-center justify-center gap-4">
          <div className="mb-6 flex items-end gap-4">
            <div>
              <p>Name: {session.user.name}</p>
              <p>Email: {session.user.email}</p>
            </div>
            {session.user.image && (
              <Image
                src={session.user.image}
                alt="profile pic"
                width={100}
                height={100}
              />
            )}
          </div>
          <form action={handleSignOut} className=" ">
            <button className="rounded-md bg-gray-500 px-6  py-2 text-2xl uppercase text-[#0c0c22] transition  hover:bg-gray-300 active:scale-95">
              Logout
            </button>
          </form>
        </section>
      )}
    </>
  );
}
