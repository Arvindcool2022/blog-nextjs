import H1 from '@/components/ui/H1';

export const metadata = { title: { absolute: 'Admin' } }; // to ignore the template

export default function Page() {
  return (
    <div className="container border">
      <H1>Admin page</H1>
    </div>
  );
}
