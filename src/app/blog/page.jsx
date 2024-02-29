import BlogCard from '@/components/BlogCard';
import H1 from '@/components/ui/H1';
import Link from 'next/link';

const codingArticles = [
  {
    id: 1,
    title: 'Master the Art of Debugging: Essential Tips and Tricks',
    date: '23 nov 2023',
    desc_highlight:
      'Learn how to effectively identify and resolve bugs in your code, saving time and frustration.'
  },
  {
    id: 2,
    title: 'Unlock the Power of Functional Programming: A Paradigm Shift',
    date: '03 jan 2023',
    desc_highlight:
      'Discover the benefits and concepts of functional programming, leading to cleaner, more predictable code.'
  },
  {
    id: 3,
    title: 'Taming the Chaos: Best Practices for Effective Code Organization',
    date: '20 may 2023',
    desc_highlight:
      'Maintain code clarity and consistency with these valuable tips on organization and structure.'
  },
  {
    id: 4,
    title: 'Boosting Your Efficiency: Essential Productivity Hacks for Coders',
    date: '13 feb 2023',
    desc_highlight:
      'Maximize your coding flow and output with these practical strategies for time management and focus.'
  },
  {
    id: 5,
    title: 'Demystifying Git: A Foundational Guide to Version Control',
    date: '12 nov 2023',
    desc_highlight:
      'Gain a clear understanding of Git, empowering you to collaborate and manage your code effectively.'
  },
  {
    id: 6,
    title: 'Embrace the Power of Testing: Write Clean and Maintainable Code',
    date: '15 dec 2023',
    desc_highlight:
      'Integrate testing into your development process to ensure code quality, reliability, and maintainability.'
  },
  {
    id: 7,
    title: 'Level Up Your Problem-Solving Skills: Think Like a Coder',
    date: '09 feb 2023',
    desc_highlight:
      'Develop a problem-solving mindset like a coder, breaking down challenges and finding efficient solutions.'
  },
  {
    id: 8,
    title: 'Mastering the Art of APIs: Connect Your Applications to the World',
    date: '23 jun 2023',
    desc_highlight:
      'Learn how to use APIs to unlock data, functionality, and integrate your applications with external services.'
  },
  {
    id: 9,
    title: 'Beyond the Basics: Explore Advanced Programming Concepts',
    date: '18 aug 2023',
    desc_highlight:
      'Delve deeper into advanced programming concepts like algorithms, data structures, and patterns to elevate your skills.'
  },
  {
    id: 10,
    title: 'Embrace Continuous Learning: The Key to Staying Ahead',
    date: '01 apr 2023',
    desc_highlight:
      'Cultivate a continuous learning mindset to keep up with the ever-evolving world of technology and programming.'
  }
];

// ... Rest of your BlogCard component code here

export default function Page() {
  return (
    <section className="container overflow-hidden lg:px-4">
      <H1 className="mb-6 text-gray-400">Articles</H1>
      <div className="grid grid-cols-1 justify-center justify-items-center gap-10 md:grid-cols-3 lg:grid-cols-4">
        {codingArticles.map(data => (
          <BlogCard key={data.date} data={data} />
        ))}
      </div>
    </section>
  );
}
