import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  angular,
  python,
  mysql,
  starbucks,
  tesla,
  shopify,
  Techmentry,
  testIO,
  Nucsoft,
  codeClause,
  carrent,
  jobit,
  tripguide,
  threejs,
  Peloton,
  canva,
} from "../assets";

import review_1_image from "../assets/review_1_image.jpg";

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
    title: "Manual Tester",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Global Market Researcher",
    icon: creator,
  },
];

const technologies = [
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
    name: "MySql",
    icon: mysql,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Global Market Reseacher",
    company_name: "Techmentry",
    icon: Techmentry,
    iconBg: "#383E56",
    date: "Dec 2021 - Feb 2022",
    points: [
      "Conducted detailed research on 10 educational platforms, analyzing features, user engagement, pricing, and competitive positioning.",
      "Compiled insights into a structured 100+ page document, providing a foundation for an upcoming educational app.",
      "Evaluated market trends, user behavior, and key differentiators to identify opportunities for innovation.",
      "Delivered a comprehensive analysis over two months, ensuring in-depth coverage and actionable recommendations for the startup.",
    ],
  },
  {
    title: "Software Tester Freelancer",
    company_name: "TestIO",
    icon: testIO,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Present",
    points: [
      "Conduct thorough testing of desktop websites and Android applications to ensure optimal performance and user experience.",
      "Identify and analyze various types of bugs, including functional, visual, and content-related issues.",
      "Document bug reports systematically, providing clear insights for development teams to resolve issues efficiently.",
      "Validate user stories to confirm they function as expected and align with business requirements.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Nucsoft",
    icon: Nucsoft,
    iconBg: "#383E56",
    date: "Jul 2024 - Dec 2024",
    points: [
      "Completed comprehensive training in Python and SQL, gaining a strong foundation in database management and backend development.",
      "Developed expertise in application support, ensuring seamless functionality and performance optimization.",
      "Enhanced troubleshooting skills to diagnose and resolve technical issues efficiently.",
      "Applied learned concepts to real-world scenarios, improving problem-solving abilities in software development and support.",
    ],
  },
  {
    title: "Python Developer Intern",
    company_name: "Code Clause",
    icon: codeClause,
    iconBg: "#E6DEDD",
    date: "Feb 2025 - Mar 2025",
    points: [
      "Developed a Currency Converter application using Python and Tkinter for GUI-based currency conversion.",
      "Implemented manual exchange rate input, allowing offline usage without relying on APIs.",
      "Designed an interactive UI to accept currency names, exchange rates, and amounts for real-time conversion.",
      "Gained hands-on experience in Python GUI development, logic-based calculations, and user interaction design.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Prem from Test Elevate provided us with a detailed bug report for SCDND Estates. While some findings were minor styling issues, he also uncovered real bugs that helped us improve our site’s security and overall functionality. What impressed me most was his professionalism — from clear documentation to recorded screen demos for each issue. Great work, and highly recommended!",
    name: "Chandan Kumar",
    designation: "Frontend Developer",
    company: "SCDND Estates Pvt. Ltd",
    image: review_1_image
  },
  {
    testimonial:
      "Client feedback will be shared here soon. Stay tuned!",
    name: "Name",
    designation: "Designation",
    company: "Company",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Client feedback will be shared here soon. Stay tuned!",
    name: "Name",
    designation: "Designation",
    company: "Company",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Low Severity",
    description: "On Peloton Interactive, only the Zip Code field is highlighted when no data is entered, instead of all required fields, causing potential user confusion.",
    tags: [
      {
        name: "Peloton Interactive",
        color: "blue-text-gradient",
      },
      {
        name: "UIBug",
        color: "green-text-gradient",
      },
      {
        name: "Validation",
        color: "pink-text-gradient",
      },
    ],
    image: Peloton,
    source_code_link: "https://drive.google.com/file/d/1IKkbGsx66Y41YsvwH3FdcEp6pKiq5VOe/view?usp=sharing",
  },
  {
    name: "High Severity",
    description:
      "On Canva, when users switch from subscript to superscript formatting, the entered text disappears upon clicking the screen, preventing them from retaining their input.",
    tags: [
      {
        name: "Canva",
        color: "blue-text-gradient",
      },
      {
        name: "DataLoss",
        color: "green-text-gradient",
      },
      {
        name: "UrgentFix",
        color: "pink-text-gradient",
      },
    ],
    image: canva,
    source_code_link: "https://drive.google.com/file/d/1WQr9VdY8tL4Tss-PD5GS-YEjXb5BLyAw/view?usp=sharing",
  },
  {
    name: "Critical Severity",
    description:
      "A critical issue on Zeus Living, where the Complete Booking button stays inactive even after entering missing card details, blocking users from completing their booking.",
    tags: [
      {
        name: "Zeus Living",
        color: "blue-text-gradient",
      },
      {
        name: "Payment",
        color: "green-text-gradient",
      },
      {
        name: "BlockedAction",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://drive.google.com/file/d/1mt3iFsXCv-PKHf6b-c3f-z9Itzeq3vq2/view?usp=sharing",
  },
];

export { services, technologies, experiences, testimonials, projects };
