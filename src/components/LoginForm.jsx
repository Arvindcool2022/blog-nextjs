'use client';
import { useFormState } from 'react-dom';
import { login } from '@/lib/action';
import H1 from './ui/H1';
import SubmitButton from './ui/SubmitButton';

const LoginForm = () => {
  const [state, formAction] = useFormState(login, null);

  return (
    <form
      action={formAction}
      className="flex w-full min-w-[420px] flex-col gap-3 rounded-md border border-gray-600 p-4 *:rounded *:px-4 *:py-2 *:outline-none md:w-2/3 lg:w-1/4"
    >
      <H1 className="my-0 text-center text-2xl text-gray-300">Login</H1>
      <input
        placeholder="Email ID"
        className="bg-gray-700"
        type="text"
        name="email"
        // id=""
      />

      <input
        placeholder="Password"
        className="mb-2 bg-gray-700"
        type="password"
        name="password"
        // id=""
      />

      <SubmitButton>Login with credentials</SubmitButton>
      {state?.error && (
        <p className="text-center text-red-600">{state.error}</p>
      )}
    </form>
  );
};

export default LoginForm;
