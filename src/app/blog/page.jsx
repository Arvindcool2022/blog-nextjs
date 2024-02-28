import BlogCard from '@/components/BlogCard';
import H1 from '@/components/ui/H1';
import Link from 'next/link';

const codingArticles = [
  {
    title: 'Master the Art of Debugging: Essential Tips and Tricks',
    date: '23 nov 2023',
    desc_highlight:
      'Learn how to effectively identify and resolve bugs in your code, saving time and frustration.',
    ReadMore: 'Read More'
  },
  {
    title: 'Unlock the Power of Functional Programming: A Paradigm Shift',
    date: '03 jan 2023',
    desc_highlight:
      'Discover the benefits and concepts of functional programming, leading to cleaner, more predictable code.',
    ReadMore: 'Read More'
  },
  {
    title: 'Taming the Chaos: Best Practices for Effective Code Organization',
    date: '20 may 2023',
    desc_highlight:
      'Maintain code clarity and consistency with these valuable tips on organization and structure.',
    ReadMore: 'Read More'
  },
  {
    title: 'Boosting Your Efficiency: Essential Productivity Hacks for Coders',
    date: '13 feb 2023',
    desc_highlight:
      'Maximize your coding flow and output with these practical strategies for time management and focus.',
    ReadMore: 'Read More'
  },
  {
    title: 'Demystifying Git: A Foundational Guide to Version Control',
    date: '12 nov 2023',
    desc_highlight:
      'Gain a clear understanding of Git, empowering you to collaborate and manage your code effectively.',
    ReadMore: 'Read More'
  },
  {
    title: 'Embrace the Power of Testing: Write Clean and Maintainable Code',
    date: '15 dec 2023',
    desc_highlight:
      'Integrate testing into your development process to ensure code quality, reliability, and maintainability.',
    ReadMore: 'Read More'
  },
  {
    title: 'Level Up Your Problem-Solving Skills: Think Like a Coder',
    date: '09 feb 2023',
    desc_highlight:
      'Develop a problem-solving mindset like a coder, breaking down challenges and finding efficient solutions.',
    ReadMore: 'Read More'
  },
  {
    title: 'Mastering the Art of APIs: Connect Your Applications to the World',
    date: '23 jun 2023',
    desc_highlight:
      'Learn how to use APIs to unlock data, functionality, and integrate your applications with external services.',
    ReadMore: 'Read More'
  },
  {
    title: 'Beyond the Basics: Explore Advanced Programming Concepts',
    date: '18 aug 2023',
    desc_highlight:
      'Delve deeper into advanced programming concepts like algorithms, data structures, and patterns to elevate your skills.',
    ReadMore: 'Read More'
  },
  {
    title: 'Embrace Continuous Learning: The Key to Staying Ahead',
    date: '01 apr 2023',
    desc_highlight:
      'Cultivate a continuous learning mindset to keep up with the ever-evolving world of technology and programming.',
    ReadMore: 'Read More'
  }
];

// ... Rest of your BlogCard component code here

export default function Page() {
  return (
    <div className="container overflow-hidden">
      <H1>Blog Posts</H1>
      <div className="grid grid-cols-1 justify-center justify-items-center gap-10 md:grid-cols-3 lg:grid-cols-4">
        {codingArticles.map(data => (
          <BlogCard data={data} />
        ))}
      </div>
      <div className="py-5">
        {[1, 2, 3, 4, 5].map(id => (
          <Link
            key={id}
            className="inline-block p-4 capitalize text-blue-600"
            href={`/blog/${id}`}
          >
            post {id}
          </Link>
        ))}
      </div>
    </div>
  );
}
