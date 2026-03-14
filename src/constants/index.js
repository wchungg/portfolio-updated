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

const logoIconsList = [
    {
        imgPath: "/images/projects/project4.png"
    },
    {
        imgPath: "/images/projects/project4.png"
    },
    {
        imgPath: "/images/projects/project4.png"
    },
    {
        imgPath: "/images/projects/project4.png"
    },
]

const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

const leftTechList = ["TypeScript","TypeScript","React","React"]
const rightTechList = ["VueJS","AWS","MongoDB","React"]

export {
  greetings,
  heroText,
  roles,
  counterItems,
  projects,
  navLinks,
  logoIconsList,
  gridItems,
  leftTechList,
  rightTechList
};