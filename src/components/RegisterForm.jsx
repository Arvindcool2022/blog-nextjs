'use client';
import { useFormState } from 'react-dom';
import { register } from '@/lib/action';
import SubmitButton from './ui/SubmitButton';

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, null);
  return (
    <form
      action={formAction}
      className="flex min-w-full flex-col gap-6 *:rounded *:px-4 *:py-2 *:outline-none md:w-4/5 lg:w-1/3"
    >
      <input
        placeholder="User Name"
        className="bg-gray-700"
        type="text"
        name="username"
        // id=""
      />
      <input
        placeholder="Email ID"
        className="bg-gray-700"
        type="email"
        name="email"
        // id=""
      />
      <input
        placeholder="Password"
        className="bg-gray-700"
        type="password"
        name="password"
        // id=""
      />
      <input
        placeholder="Confirm Password"
        className="bg-gray-700"
        type="password"
        name="passwordRepeat"
        // id=""
      />
      <input
        placeholder="Image Link(optional)"
        className="bg-gray-700"
        type="text"
        name="img"
        // id=""
      />

      <SubmitButton>Sign up</SubmitButton>
      {state?.error && (
        <p className="text-center text-red-600">{state.error}</p>
      )}
    </form>
  );
};

// const SubmitButton = () => {
//   const { pending } = useFormStatus(); // this would if it in same comp as form // need to extract it to child comp
//   return (
//     <button
//       disabled={pending}
//       className="bg-blue-600 transition hover:bg-blue-800 active:scale-95 disabled:bg-blue-400"
//     >
//       {pending && (
//         <span className="flex items-center justify-center gap-2">
//           <svg
//             className="h-5 w-5 animate-spin text-white"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//           >
//             <circle
//               className="opacity-25"
//               cx="12"
//               cy="12"
//               r="10"
//               stroke="currentColor"
//               stroke-width="4"
//             ></circle>
//             <path
//               className="opacity-75"
//               fill="currentColor"
//               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//             ></path>
//           </svg>{' '}
//           Processing
//         </span>
//       )}
//       {!pending && 'Sign Up'}
//     </button>
//   );
// };

export default RegisterForm;
