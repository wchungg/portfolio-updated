import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGreensock,
  SiFramer,
  SiVercel,
  SiFigma,
} from "react-icons/si";

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
        name: "Experiences",
        link: "#experiences",
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

const expCards = [
  {
    review: "William brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "William’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review: "William’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const skills = [
  { name: "React", Icon: SiReact, categories: ["Frontend"] },
  { name: "Next.js", Icon: SiNextdotjs, categories: ["Frontend"] },
  { name: "TypeScript", Icon: SiTypescript, categories: ["Frontend"] },
  { name: "Tailwind", Icon: SiTailwindcss, categories: ["Frontend"] },
  { name: "GSAP", Icon: SiGreensock, categories: ["Frontend"] },
  { name: "Framer", Icon: SiFramer, categories: ["Frontend"] },
  { name: "Vercel", Icon: SiVercel, categories: ["DevOps"] },
  { name: "Figma", Icon: SiFigma, categories: ["Design"] },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

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
  rightTechList,
  expCards,
  expLogos,
  skills,
  socialImgs
};