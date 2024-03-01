const codingArticles = [
  {
    id: 1,
    userId: 1,
    title: 'Master the Art of Debugging: Essential Tips and Tricks',
    date: '23 nov 2023',
    desc_highlight:
      'Learn how to effectively identify and resolve bugs in your code, saving time and frustration.',
    body: 'Debugging is a crucial skill for any programmer. In this article, we delve deep into various techniques and strategies to master the art of debugging. From using print statements and logging to leveraging debugging tools and techniques, we cover it all. By the end of this article, you will have a solid understanding of how to efficiently debug your code and squash those pesky bugs.'
  },
  {
    id: 2,
    userId: 1,
    title: 'Unlock the Power of Functional Programming: A Paradigm Shift',
    date: '03 jan 2023',
    desc_highlight:
      'Discover the benefits and concepts of functional programming, leading to cleaner, more predictable code.',
    body: 'Functional programming has gained popularity in recent years due to its focus on immutability, pure functions, and higher-order functions. In this article, we explore the fundamental concepts of functional programming and how it differs from imperative programming. We also discuss the advantages of using functional programming paradigms and provide examples to illustrate its power in writing clean, concise, and maintainable code.'
  },
  {
    id: 3,
    userId: 2,
    title: 'Taming the Chaos: Best Practices for Effective Code Organization',
    date: '20 may 2023',
    desc_highlight:
      'Maintain code clarity and consistency with these valuable tips on organization and structure.',
    body: 'Code organization is essential for maintaining clarity and consistency in large projects. In this article, we share best practices for structuring your codebase to improve readability, maintainability, and collaboration among team members. From choosing meaningful variable names to modularizing your code and using design patterns, we cover various strategies to tame the chaos and keep your codebase organized.'
  },
  {
    id: 4,
    userId: 2,
    title: 'Boosting Your Efficiency: Essential Productivity Hacks for Coders',
    date: '13 feb 2023',
    desc_highlight:
      'Maximize your coding flow and output with these practical strategies for time management and focus.',
    body: 'As a coder, maximizing productivity is crucial to meet deadlines and deliver high-quality code. In this article, we share essential productivity hacks to boost your efficiency and make the most out of your coding sessions. From time management techniques and setting realistic goals to minimizing distractions and staying focused, we cover it all. By implementing these productivity hacks, you can optimize your workflow and achieve better results in less time.'
  },
  {
    id: 5,
    userId: 3,
    title: 'Demystifying Git: A Foundational Guide to Version Control',
    date: '12 nov 2023',
    desc_highlight:
      'Gain a clear understanding of Git, empowering you to collaborate and manage your code effectively.',
    body: "Git is a powerful version control system widely used in the software development industry. In this article, we demystify Git and provide a foundational guide to version control. We cover essential concepts such as repositories, branches, commits, and merging. Additionally, we explore common Git workflows and best practices for collaborating with teams. Whether you're new to Git or looking to deepen your understanding, this article will equip you with the knowledge to effectively manage your codebase using Git."
  },
  {
    id: 6,
    userId: 3,
    title: 'Embrace the Power of Testing: Write Clean and Maintainable Code',
    date: '15 dec 2023',
    desc_highlight:
      'Integrate testing into your development process to ensure code quality, reliability, and maintainability.',
    body: 'Testing is an integral part of the software development process, ensuring code quality, reliability, and maintainability. In this article, we emphasize the importance of embracing testing and provide strategies for integrating it into your development workflow. From writing unit tests and integration tests to adopting test-driven development (TDD) practices, we cover various approaches to ensure comprehensive test coverage. By prioritizing testing, you can write cleaner, more maintainable code and build robust software applications.'
  },
  {
    id: 7,
    userId: 4,
    title: 'Level Up Your Problem-Solving Skills: Think Like a Coder',
    date: '09 feb 2023',
    desc_highlight:
      'Develop a problem-solving mindset like a coder, breaking down challenges and finding efficient solutions.',
    body: "Problem-solving is at the core of coding, requiring a systematic approach to break down complex challenges and find efficient solutions. In this article, we explore strategies for developing a problem-solving mindset like a coder. From breaking down problems into smaller tasks and identifying patterns to leveraging algorithms and data structures, we cover techniques to enhance your problem-solving skills. By adopting a coder's mindset, you can approach challenges with confidence and find creative solutions."
  },
  {
    id: 8,
    userId: 4,
    title: 'Mastering the Art of APIs: Connect Your Applications to the World',
    date: '23 jun 2023',
    desc_highlight:
      'Learn how to use APIs to unlock data, functionality, and integrate your applications with external services.',
    body: 'APIs (Application Programming Interfaces) play a crucial role in modern software development, allowing applications to communicate and share data with external services. In this article, we delve into the art of mastering APIs and provide practical guidance on integrating them into your applications. We cover topics such as RESTful APIs, authentication, error handling, and best practices for designing and consuming APIs. By mastering APIs, you can unlock the full potential of your applications and seamlessly integrate them with external services.'
  },
  {
    id: 9,
    userId: 5,
    title: 'Beyond the Basics: Explore Advanced Programming Concepts',
    date: '18 aug 2023',
    desc_highlight:
      'Delve deeper into advanced programming concepts like algorithms, data structures, and patterns to elevate your skills.',
    body: "While mastering the basics is essential for any programmer, delving into advanced programming concepts can take your skills to the next level. In this article, we explore advanced topics such as algorithms, data structures, design patterns, and optimization techniques. We delve into the underlying principles behind these concepts and provide practical examples to illustrate their applications in real-world scenarios. Whether you're looking to tackle complex problems or optimize your code for performance, this article will help you elevate your programming skills."
  },
  {
    id: 10,
    userId: 5,
    title: 'Embrace Continuous Learning: The Key to Staying Ahead',
    date: '01 apr 2023',
    desc_highlight:
      'Cultivate a continuous learning mindset to keep up with the ever-evolving world of technology and programming.',
    body: 'Continuous learning is essential for staying ahead in the rapidly evolving field of technology and programming. In this article, we emphasize the importance of embracing a continuous learning mindset and provide strategies for lifelong learning. From exploring new programming languages and frameworks to staying updated with industry trends and best practices, we cover various approaches to keep your skills sharp and relevant. By embracing continuous learning, you can adapt to new challenges, expand your knowledge, and stay ahead in your career.'
  }
];

const users = [
  {
    name: 'John Doe',
    id: 1,
    email: 'john@example.com',
    age: 30,
    status: 'active'
  },
  {
    name: 'Jane Smith',
    id: 2,
    email: 'jane@example.com',
    age: 25,
    status: 'inactive'
  },
  {
    name: 'Alice Johnson',
    id: 3,
    email: 'alice@example.com',
    age: 35,
    status: 'active'
  },
  {
    name: 'Bob Brown',
    id: 4,
    email: 'bob@example.com',
    age: 28,
    status: 'active'
  },
  {
    name: 'Eva Wilson',
    id: 5,
    email: 'eva@example.com',
    age: 32,
    status: 'inactive'
  }
];

const getPostData = async id =>
  codingArticles.find(article => article.id === parseInt(id));

const getData = async () => codingArticles;

const getUserData = async userId => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(users.find(user => user.id === userId));
    }, 1500);
  });
};

export { getData, getPostData, getUserData };
