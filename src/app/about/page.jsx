import H1 from '@/components/ui/H1';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="container border">
      <H1>About us</H1>
      <Image src="/about.png" alt="about" width={500} height={500} />
    </div>
  );
}
