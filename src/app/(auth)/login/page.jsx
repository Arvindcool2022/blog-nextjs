import LoggedIn from '@/components/LoggedIn';
import LoginForm from '@/components/LoginForm';
import { handleSignIn } from '@/lib/action';
import { auth } from '@/lib/auth';
import Link from 'next/link';

export default async function Page() {
  const session = await auth();
  // console.log('Session obj', session);

  return (
    <>
      {!session?.user ? (
        <div className="container  flex h-[77svh] flex-col items-center justify-center gap-6">
          <LoginForm />
          <p className="font-medium underline underline-offset-1">or</p>
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
        <LoggedIn session={session} />
      )}
    </>
  );
}
