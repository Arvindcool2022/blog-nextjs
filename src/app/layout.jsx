import { Inter } from 'next/font/google';
import './globals.css';
import NavLinks from '@/components/NavLinks';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Code Chronicle',
  description:
    'Welcome to Code Chronicle: Your premier destination for coding insights, developer experiences, and system design strategies, with a focus on mastering LeetCode challenges. Explore our curated content for practical tips, expert advice, and in-depth discussions to enhance your coding skills. Join our vibrant community of developers and dive into the world of software development excellence at Code Chronicle!'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-[#0c0c22] text-gray-200'}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
