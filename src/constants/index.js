import {
  java1,
  backend,
  creator,
  web,
  javascript,
  python,
  html,
  css,
  reactjs,
  java,
  tailwind,
  mongodb,
  cpp,
  c,
  php,
  mysql,
  sqlite,
  alumnus,
  petshop,
  Attendance,
  stock,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: java1,
  },
  {
    title: "Backend and Database Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  
  {
    name: "C",
    icon: c,
  },
  {
    name: "Cpp",
    icon: cpp,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Php",
    icon: php,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Sqlite",
    icon: sqlite,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "ALUMNUS SOFTWARE LTD.",
    icon: alumnus,
    iconBg: "white",
    date: "April 2023 - May 2023",
    points: [
      "Worked as XML Developer Intern",
      "Acquired the skill of XML parsing and crafting Python code",
      "Learned processing XML files to produce CSV file",
    ],
  },
];

const projects = [
  {
    name: "E-Commerce Pet Shop Website",
    description:
      "Its a web based project that helps local shops easily display and sell their pets and their products online at a low cost. It's a budget-friendly and effective tool for small and mid-sized businesses.",
    tags: [
      {
        name: "html & css",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: petshop,
    source_code_link: "https://github.com/",
  },
  {
    name: "Face Recognition Attendance Management",
    description:
      "This project aims to build an Attendance Management System using Face Detection technology. As the system detects faces, it records attendance information in both a CSV file (referred to as the attendance file) and a database.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask & django",
        color: "green-text-gradient",
      },
      {
        name: "sqlite",
        color: "pink-text-gradient",
      },
    ],
    image: Attendance,
    source_code_link: "https://github.com/",
  },
  {
    name: "Stock Market Prediction",
    description:
      "The project involves creating and applying a system that combines various machine learning methods to predict and anticipate stock market trends and changes.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine learning",
        color: "green-text-gradient",
      },
    ],
    image: stock,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
