import { getUser } from '@/lib/data';

export default async function PostAuthor({ userId }) {
  const userData = await getUser(userId);
  console.log(userData);
  return (
    <>
      <span className="font-medium">{userData.username}</span>
      <span className="-mt-3 text-xs text-gray-500">{userData.email}</span>
    </>
  );
}
