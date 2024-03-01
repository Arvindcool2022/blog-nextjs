import { getUserData } from '@/lib/data';

export default async function PostAuthor({ userId }) {
  console.log(userId);
  const userData = await getUserData(userId);
  return (
    <>
      <span className="font-medium">{userData.name}</span>
      <span className="-mt-3 text-xs text-gray-500">{userData.email}</span>
    </>
  );
}
