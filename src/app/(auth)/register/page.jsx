import H1 from '@/components/ui/H1';
import { register } from '@/lib/action';

export default function Page() {
  return (
    <div className="container  flex h-[77svh] items-center justify-center">
      <form
        action={register}
        className="flex w-full flex-col gap-6 rounded-md border border-gray-600 p-6 *:rounded *:px-4 *:py-2 *:outline-none md:w-4/5 lg:w-1/3"
      >
        <H1 className="text-gray-300">Register</H1>
        <input
          placeholder="User Name"
          className="bg-gray-700"
          type="text"
          name="username"
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
          placeholder="Password"
          className="bg-gray-700"
          type="password"
          name="password"
          id=""
        />
        <input
          placeholder="Confirm Password"
          className="bg-gray-700"
          type="password"
          name="passwordRepeat"
          id=""
        />
        <input
          placeholder="Image Link(optional)"
          className="bg-gray-700"
          type="text"
          name="img"
          id=""
        />

        <button className="bg-blue-600 transition hover:bg-blue-800 active:scale-95">
          Sign Up
        </button>
      </form>
    </div>
  );
}
