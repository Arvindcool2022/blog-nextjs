import RegisterForm from '@/components/RegisterForm';
import H1 from '@/components/ui/H1';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="container  flex min-h-[77svh] items-center justify-center ">
      <div className="flex flex-col gap-2 rounded-md border border-gray-600 p-6">
        <H1 className="my-0 text-center text-3xl text-gray-300">Register</H1>
        <RegisterForm />
        <Link className="text-center text-gray-300" href="/login">
          Already have an account?{' '}
          <span className="font-bold underline">Login here</span>
        </Link>
      </div>
    </div>
  );
}
