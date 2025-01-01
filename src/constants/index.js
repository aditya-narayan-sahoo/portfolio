export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const myProjects = [
  {
    title: "Chatty - Chat with people",
    desc: "Chatty is a real time chat app that allows users to connect with others and share their thoughts, ideas, and experiences.",
    subdesc:
      "Built with React.js, Vite, TailwindCSS, Node.js, MongoDB, and Socket.io. The global state is managed using Zustand and the user authentication is handled using JWT with encryption using bcrypt. Users can see other online users in real time with the help of Socket.io",
    href: "https://chatty-72tc.onrender.com/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#0E0E10",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Javascript",
        path: "/assets/javascript.png",
      },
      {
        id: 4,
        name: "Node.js",
        path: "/assets/nodejs.png",
      },
      {
        id: 5,
        name: "MongoDB",
        path: "/assets/mongodb.png",
      },
    ],
  },
  {
    title: "NetflixGPT - Search movies with AI",
    desc: "NetflixGPT is a movie recommendation app that uses TMDB API to fetch movies & Google Gemini to generate movie recommendations based on user input.",
    subdesc:
      "An innovative movie recommendation app that leverages the TMDB API & Google Gemini for intelligent recommendation generation. Developed using React.js, styled using Tailwind CSS and Firebase for backend services, including user authentication and data storage.",
    href: "https://netflixgpt-ans.web.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.jpg",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 0px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/javascript.png",
      },
      {
        id: 4,
        name: "Firebase",
        path: "/assets/firebase.png",
      },
    ],
  },
  {
    title: "Foody - Order Food Online",
    desc: "Foody is a food ordering app that allows users to browse and order food from various restaurants. It also provides cart management and customer support.",
    subdesc:
      "A responsive and user-friendly food ordering app developed using React.js. It uses Redux for state management. It allows users to search for restaurants, filter them by rating, and manage the cart by adding or removing items. The project incorporates Vitest library for testing.",
    href: "https://ans-order-food.netlify.app/",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.webp",
    logoStyle: {
      backgroundColor: "#0E0E10",
      background: "#0E0E10",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/javascript.png",
      },
      {
        id: 4,
        name: "Vitest",
        path: "/assets/vitest.webp",
      },
    ],
  },
  {
    title: "YCDirectory - Project Showcase App",
    desc: " Directory is a project showcase app that allows users to search for projects and view their details. It also provides a contact form for users to get in touch with the project owner.",
    subdesc:
      "Built with Next.js 15, it uses Tailwind CSS and Shadcn UI for styling. It uses sanity CMS for project management and includes a contact form for users to get in touch with the project owner.Users can submit startup ideas, including title, description, category & links. ",
    href: "https://show-it-sigma.vercel.app/",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.svg",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Sanity CMS",
        path: "/assets/sanity.png",
      },
    ],
  },
  {
    title: "StoreIt - Store Files On Cloud",
    desc: "StoreIt is a cloud storage app that allows users to store their files on the cloud. It also provides a contact form for users to get in touch with the project owner.",
    subdesc:
      "A storage management and file sharing platform that lets users effortlessly upload, organize, and share files. Built with the latest Next.js 15 and the Appwrite Node SDK, utilizing advanced features for seamless file management.",
    href: "https://store-it-steel.vercel.app/",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/project-logo5.svg",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Appwrite",
        path: "/assets/appwrite.jpg",
      },
    ],
  },
];

export const workExperiences = [
  {
    id: 1,
    name: "KPIT Technologies",
    pos: "Software Engineer Intern",
    duration: { start: "2023-12", end: "2024-05" },
    title:
      "I was involved in the full SDLC, focusing on designing, implementing and testing the solutions. My role included collaborating with cross-functional teams to deliver innovative software solutions, troubleshooting complex technical issues, and participating in training programs to enhance my technical skills.",
    icon: "/assets/kpit.jpg",
    animation: "clapping",
  },
  {
    id: 2,
    name: "Persistent Systems",
    pos: "Summer Intern",
    duration: { start: "2023-06", end: "2023-08" },
    title:
      "I focused on developing dynamic web applications using React.js and state management using Redux.Additionally, I collaborated with cross-functional teams to enhance user experience and conducted thorough testing to ensure high-quality deliverables ",
    icon: "/assets/persistent.jpeg",
    animation: "salute",
  },
];
