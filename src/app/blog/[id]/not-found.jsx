'use client';
import { useParams } from 'next/navigation';

const NotFound = () => {
  const route = useParams();
  console.log(route);
  return <div className="container">blog - {route.id} does not exist</div>;
};

export default NotFound;
