export const lastUpdated = "Janurary 9, 2025";

export const socials = {
  email: "jaedonaspurlock@outlook.com",
  linkedin: "https://www.linkedin.com/in/jaedon-spurlock/",
  github: "https://github.com/JaedonSpurlock01",
  instagram: "https://www.instagram.com/jaedonspurlock",
  youtube: "https://www.youtube.com/channel/UC_kzjV049b2XQlKe306re5g",
} as const;

export const info = {
  name: "Jaedon Spurlock",
  role: "Software Engineer",
  resume: "/resume.pdf",
  location: "San Diego Metropolitan Area",
  about:
    "I'm a software engineer with experience in web development and embedded systems. I'm interested in robotics, autonomous systems, and high-quality interfaces.",
} as const;

export const work = [
  {
    company: "Lockheed Martin",
    position: "Incoming Engineering Intern",
    location: "Orlando, Florida",
    date: "May 2025",
    imageSrc: "/welfie.png",
    href: "https://www.linkedin.com/company/welfie/",
    description: "Incoming intern for the Rotary-Mission-Systems (RMS) team in Orlando, Florida. I interviewed for this position in-person at the SHPE convention center.",
  },
  {
    company: "Welfie",
    position: "Software Engineer Intern",
    location: "San Diego, California",
    date: "May 2024 - Aug 2024",
    imageSrc: "/welfie.png",
    href: "https://www.linkedin.com/company/welfie/",
    description:
      "Developed a cross-platform mental health app with React Native, improving workflows by 30% with documentation and agile methods. Led a team to create a Python and Selenium-based testing framework, boosting test coverage by 70%. Deployed CI/CD pipelines using Google Cloud, Docker, and Linux, while optimizing website production code.",
  },
  {
    company: "CodeDay",
    position: "Open Source Contributor",
    location: "Remote",
    date: "Oct 2023 - Nov 2023",
    imageSrc: "",
    href: "",
    description:
      "Improved reliability of an open-source project by implementing a test case with JavaScript and Mocha. Led a team of 3 to verify conversions from kWh to BTU energy units, resulting in increased confidence in data integrity.",
  },
] as const;

export const leadership = [
  {
    club: "Robotics Club",
    position: "Software Lead",
    location: "CSUSM",
    description:
      "Current software lead in rover development, robotcar platforms, and autonomous navigation",
  },
  {
    club: "Google Developer Student Club",
    position: "Incoming President",
    location: "CSUSM",
    description:
      "Current software lead and incoming president for GDSC, leading the development of hands-on university-wide projects",
  },
] as const;

export const education = [
  {
    school: "California State University, San Marcos",
    degree: "Bachelors of Science in Software Engineering",
    gpa: "3.95/4.00",
    date: "Aug 2022 - Present",
    imageSrc: "/education/csusm.png",
    href: "https://www.csusm.edu/",
    desc: "Courses: Data Structures & Algorithms, Software Design & Development, Database Management Systems, Calculus I-II, Real-Time Concepts For Embedded Systems, Physics | GPA: 3.95/4.00",
  },
] as const;

export const skills = {
  languages: ["Python", "C++", "TypeScript", "CSS", "HTML", "JSON", "Yaml", "GoLang"],
  frameworks: ["React", "React Native", "NodeJS", "ROS2", "Express", "NextJS"],
  tools: [
    "AWS",
    "Google Cloud",
    "MongoDB",
    "VSCode",
    "Docker",
    "Git",
    "GitHub",
    "Postman",
    "PostgreSQL",
  ]
} as const;

export const projects = [
  {
    title: "Routify",
    description:
      "City pathfinding visualizer website used to understand pathfinding algorithms",
    websiteUrl: "https://www.routify.cc",
    githubUrl: "https://www.github.com/jaedonspurlock01/routify",
    imageSrc: "/projects/routify.gif",
    date: "Jan 2024 - Mar 2024",
    tags: [
      "JavaScript",
      "ReactJS",
      "Nominatim API",
      "Overpass API",
      "Amazon S3",
    ],
    features: [
      "Search any city in the world",
      "Choose between DFS, BFS, A*, and Dijkstra algorithms",
      "Customize the color scheme",
      "Change animation speed realtime",
    ]
  },
  {
    title: "GDSC Website",
    description: "Student organization website for GDSC to learn and develop software engineering",
    websiteUrl: "https://github.com/JaedonSpurlock01/robotcar",
    githubUrl: "https://github.com/JaedonSpurlock01/robotcar",
    imageSrc: "/projects/gdscweb.png",
    date: "Jun 2024 - Present",
    tags: ["TypeScript", "React", "NextJS", "MagicUI", "ShadcnUI"],
    features: [
      "Create, edit, and delete events",
      "Create, edit, and delete members",
      "Create, edit, and delete projects",
    ]
  },
  {
    title: "University Rover",
    description:
      "Assembly and software development of the unversity rover platform",
    websiteUrl: null,
    githubUrl: "",
    imageSrc: "/projects/rover.jpg",
    date: "Oct 2024 - Present",
    tags: [
      "ROS2",
      "Python",
      "Raspberry PI",
      "Jetson Nano",
      "Autonomous Systems",
    ],
    features: [
      "Autonomous navigation",
      "Remote control through ssh terminal",
      "Navigate across different terrains",
    ]
  },
  {
    title: "Robotic Car Platform",
    description:
      "Software development of remote-controlled 4-wheeled robotic car",
    websiteUrl: null,
    githubUrl: "https://github.com/JaedonSpurlock01/robotcar",
    imageSrc: "/projects/robotcar.webp",
    date: "April 2024 - May 2024",
    tags: ["C++", "ROS", "Raspberry PI", "SDL API"],
    features: [
      "Bluetooth control with controller",
    ]
  },
];

export const organizations = [
  {
    title: "Project-Based Infrastructure",
    description:
      "Secured $100k+ in funding across different organizations to create and sustain university-wide infrastructure",
    imageSrc: "/clubs/infrastructure.png",
  },
  {
    title: "Robotics Club",
    description:
      "Increased membership by 150% by engaging over 15+ students in ROS2 related projects",
    imageSrc: "/clubs/robotics.png",
  },
  {
    title: "Google Developer Student Club",
    description:
      "Onboarded 20+ new students by facilitating hands-on technical projects and skills such as ReactJS, TypeScript, and Python",
    imageSrc: "/clubs/gdsc.png",
  },
  {
    title: "Leetweb Club",
    description:
      "Organized weekly leetcode coding problems for students to improve their interviewing skills and problem-solving abilities",
    imageSrc: "/clubs/leetweb.PNG",
  },
  {
    title: "Society of Hispanic Professional Engineers Club",
    description:
      "Supported and participated in SHPE-related events, including the SHPE National Convention",
    imageSrc: "/clubs/shpe.png",
  },
  // {
  //   title: "Engineering Spaces",
  //   description:
  //     "Supported the acquirement of new engineering spaces on campus, providing a conducive environment for engineers to learn and grow",
  //   imageSrc: "/projects/routify.gif",
  // },
];