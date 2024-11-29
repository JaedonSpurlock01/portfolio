export const lastUpdated = "November 23, 2024";

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
    description: "Incoming intern for the Rotary-Mission-Systems (RMS) team.",
  },
  {
    company: "Welfie",
    position: "Software Engineer Intern",
    location: "San Diego, California",
    date: "May 2024 - Aug 2024",
    imageSrc: "/welfie.png",
    href: "https://www.linkedin.com/company/welfie/",
    description:
      "Orchestrate development of cross-platform mobile app by using React Native, Expo, and NativeWind. Accelerate workflow efficiency by 30% by integrating developer documentation and agile methodologies. Led a team of 8 interns to establish web testing ecosystem . Build automated testing framework using Python and Selenium, enhancing test coverage by 70%. Deploy and manage a CI/CD pipeline on Bitbucket by using Google Cloud, Docker, and Linux configurations. Refactor, debug, and implement website production code.",
  },
] as const;

export const leadership = [
  {
    club: "Robotics Club",
    position: "Software Lead",
    location: "CSUSM",
    description: "Current software lead in rover development, robotcar platforms, and autonomous navigation",
  },
  {
    club: "Google Developer Student Club",
    position: "Incoming President",
    location: "CSUSM",
    description: "Current software lead and incoming president for GDSC, leading the development of hands-on university-wide projects",
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
  languages: ["Python", "C++", "TypeScript", "CSS", "HTML", "JSON", "Yaml"],
  technologies: ["React", "React Native", "NodeJS", "ROS2"],
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
  ],
  practices: [
    "Agile",
    "Test-Driven-Development",
    "Refactoring",
    "Team Retrospectives",
    "Version Control",
    "CI/CD pipelines",
    "Code Review",
  ],
} as const;

export const projects = [
  {
    title: "Routify",
    description:
      "A city pathfinding visualizer website",
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
  },
  {
    title: "GDSC Student platform",
    description:
      "Developing technical interview & project prep platform for students at CSUSM",
    websiteUrl: "https://github.com/JaedonSpurlock01/robotcar",
    githubUrl: "https://github.com/JaedonSpurlock01/robotcar",
    imageSrc: "/projects/gdscweb.png",
    date: "Jun 2024 - Present",
    tags: ["TypeScript", "React", "NextJS", "MagicUI", "ShadcnUI"],
  },
  {
    title: "University Rover",
    description:
      "Assembly and software development of the unversity-wide rover platform",
    websiteUrl: null,
    githubUrl: "",
    imageSrc: "/projects/rover.jpg",
    date: "Oct 2024 - Present",
    tags: [
      "ROS2", "Python", "Raspberry PI", "Jetson Nano", "Autonomous Systems",
    ],
  },
  {
    title: "Robotic Car Platform",
    description:
      "Assembly and software development of a remote-controlled 4-wheeled robotic car",
    websiteUrl: null,
    githubUrl: "https://github.com/JaedonSpurlock01/robotcar",
    imageSrc: "/projects/robotcar.webp",
    date: "April 2024 - May 2024",
    tags: [
      "C++",
      "ROS",
      "Raspberry PI",
      "SDL API",
    ],
  },
]
