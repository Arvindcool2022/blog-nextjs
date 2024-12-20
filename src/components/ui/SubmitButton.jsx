import { useFormStatus } from 'react-dom';

const SubmitButton = ({ children }) => {
  const { pending } = useFormStatus(); // this would if it in same comp as form // need to extract it to child comp
  return (
    <button
      disabled={pending}
      className="bg-blue-600 transition hover:bg-blue-800 active:scale-95 disabled:bg-blue-400"
    >
      {pending && (
        <span className="flex items-center justify-center gap-2">
          <svg
            className="h-5 w-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>{' '}
          Processing
        </span>
      )}
      {!pending && children}
    </button>
  );
};

export default SubmitButton;
