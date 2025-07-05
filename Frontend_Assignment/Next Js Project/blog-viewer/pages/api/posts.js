export default function handler(req, res) {
  const posts = [
    {
      id: '1',
      title: 'Understanding JavaScript Closures',
      content: 'Closures are functions that remember their lexical environment even after the outer function has finished executing. This makes them powerful for data encapsulation and functional programming.'
    },
    {
      id: '2',
      title: 'Why React is So Popular in 2025',
      content: 'React continues to dominate frontend development due to its component-based structure, vast ecosystem, and strong community support. Features like hooks and concurrent rendering have made it even more powerful.'
    },
    {
      id: '3',
      title: 'A Beginners Guide to Git and GitHub',
      content: 'Git is a version control system that helps developers track changes, collaborate, and manage code efficiently. GitHub adds a layer of cloud collaboration and pull requests for teamwork.'
    },
    {
      id: '4',
      title: 'Dark Mode in CSS: Simple Yet Powerful',
      content: 'Implementing dark mode can be as easy as toggling a class on the body element. With variables and prefers-color-scheme media query, it becomes even more seamless.'
    },
    {
      id: '5',
      title: 'Top 5 VS Code Extensions Every Developer Needs',
      content: 'From Prettier to GitLens, these VS Code extensions supercharge your development workflow and improve productivity. Most are free and easy to integrate.'
    },
    {
      id: '6',
      title: 'How to Build a REST API with Node.js and Express',
      content: 'REST APIs form the backbone of many modern applications. With Express.js, you can quickly set up routes, handle requests, and connect to databases like MongoDB.'
    },
    {
      id: '7',
      title: 'Deploying a Next.js App on Vercel',
      content: 'Vercel offers zero-config deployment for Next.js apps. Just push your code to GitHub and connect the repo — it handles builds, preview URLs, and custom domains automatically.'
    },
    {
      id: '8',
      title: 'What is JWT and How Does It Work?',
      content: 'JSON Web Tokens (JWT) are a compact and secure way of transmitting user identity information between frontend and backend. They’re widely used for authentication in modern web apps.'
    },
    {
      id: '9',
      title: 'Understanding useEffect in React',
      content: 'The useEffect hook lets you run side effects in functional components. It replaces lifecycle methods like componentDidMount, and cleanup logic can prevent memory leaks.'
    }
  ];

  res.status(200).json(posts);
}
