const greetings = [
  { text: "Hello", imgPath: "/images/" },
  { text: "你好", imgPath: "/images/" },
  { text: "Hola", imgPath: "/images/" },
  { text: "こんにちは", imgPath: "/images/" },
  { text: "Hello", imgPath: "/images/" },
  { text: "你好", imgPath: "/images/" },
  { text: "Hola", imgPath: "/images/" },
  { text: "こんにちは", imgPath: "/images/" },
];

const heroText =
  "An Undergraduate Computer Science Student Interested in ";

  const roles = [
  "Full Stack Web Development",
  "UI/UX design",
  "Product Management",
  "Artificial Intelligence",
  "Machine Learning",
];

const counterItems = [
    { value: 100, suffix: "+", label: "XYZ" },
    { value: 50, suffix: "+", label: "XYZ" },
    { value: 25, suffix: "+", label: "XYZ" },
    { value: 10, suffix: "%", label: "XYZ" },
]

const projects = [
  {
    name: "AI Search Engine",
    description:
      "A semantic search engine that retrieves documents using vector embeddings and ranking algorithms. Built to explore efficient information retrieval and scalable search systems.",
    tags: [
      { name: "react", color: "text-blue-400" },
      { name: "nodejs", color: "text-green-400" },
      { name: "ai", color: "text-purple-400" },
    ],
    image: "/images/projects/project1.png",
    link: "https://github.com/username/ai-search-engine",
  },
  {
    name: "Kitchen Inventory Tracker",
    description:
      "A mobile application that tracks food inventory, expiration dates, and sends reminders before items spoil. Designed to reduce food waste and manage household groceries.",
    tags: [
      { name: "react-native", color: "text-blue-400" },
      { name: "supabase", color: "text-green-400" },
      { name: "expo", color: "text-purple-400" },
    ],
    image: "/images/projects/project2.png",
    link: "https://github.com/username/kitchen-inventory-tracker",
  },
  {
    name: "Unity Financial Dashboard",
    description:
      "A financial analytics dashboard that visualizes transaction data, account balances, and spending trends. Integrates secure authentication and modern UI components.",
    tags: [
      { name: "nextjs", color: "text-gray-400" },
      { name: "typescript", color: "text-blue-400" },
      { name: "tailwind", color: "text-cyan-400" },
    ],
    image: "/images/projects/project3.png",
    link: "https://github.com/username/unity-dashboard",
  },
  {
    name: "3D Portfolio Website",
    description:
      "An interactive developer portfolio featuring animated sections, 3D components, and smooth transitions built with modern frontend technologies.",
    tags: [
      { name: "react", color: "text-blue-400" },
      { name: "threejs", color: "text-orange-400" },
      { name: "gsap", color: "text-green-400" },
    ],
    image: "/images/projects/project4.png",
    link: "https://github.com/username/3d-portfolio",
  },
];

const navLinks = [
    {
        name: "About",
        link: "#about",
    },
    {
        name: "Projects",
        link: "#projects",
    },
    {
        name: "Skills",
        link: "#Skills",
    },
]


export {
  greetings,
  heroText,
  roles,
  counterItems,
  projects,
  navLinks
};